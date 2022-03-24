<?php
/**
 * @copyright 2019, Georg Ehrke <oc.list@georgehrke.com>
 *
 * @author Christoph Wurst <christoph@winzerhof-wurst.at>
 * @author Georg Ehrke <oc.list@georgehrke.com>
 *
 * @license GNU AGPL version 3 or any later version
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as
 * published by the Free Software Foundation, either version 3 of the
 * License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 *
 */
namespace OCA\DAV\Traits;

use OCA\DAV\CalDAV\Proxy\Proxy;
use OCA\DAV\CalDAV\Proxy\ProxyMapper;
use Sabre\DAV\Exception;
use function Sabre\Uri\split;

/**
 * Trait PrincipalTrait
 *
 * @package OCA\DAV\Traits
 */
trait PrincipalProxyTrait {

	/**
	 * Returns the list of members for a group-principal
	 *
	 * @param string $principal
	 * @return string[]
	 * @throws Exception
	 */
	public function getGroupMemberSet($principal): array {
		$members = [];

		if ($this->isProxyPrincipal($principal)) {
			$realPrincipal = $this->getPrincipalUriFromProxyPrincipal($principal);
			$principalArray = $this->getPrincipalByPath($realPrincipal);
			if (!$principalArray) {
				throw new Exception('Principal not found');
			}

			$proxies = $this->proxyMapper->getProxiesOf($principalArray['uri']);
			foreach ($proxies as $proxy) {
				if ($this->isReadProxyPrincipal($principal) && $proxy->getPermissions() === ProxyMapper::PERMISSION_READ) {
					$members[] = $proxy->getProxyId();
				}

				if ($this->isWriteProxyPrincipal($principal) && $proxy->getPermissions() === (ProxyMapper::PERMISSION_READ | ProxyMapper::PERMISSION_WRITE)) {
					$members[] = $proxy->getProxyId();
				}
			}
		}

		return $members;
	}

	/**
	 * Returns the list of groups a principal is a member of
	 * @throws Exception
	 */
	public function getGroupMembership(string $principal, bool $needGroups = false): array {
		[$prefix, $name] = split($principal);

		if ($prefix !== $this->principalPrefix) {
			return [];
		}

		$principalArray = $this->getPrincipalByPath($principal);
		if (!$principalArray) {
			throw new Exception('Principal not found');
		}

		$groups = [];
		$proxies = $this->proxyMapper->getProxiesFor($principal);
		foreach ($proxies as $proxy) {
			if ($proxy->getPermissions() === ProxyMapper::PERMISSION_READ) {
				$groups[] = $proxy->getOwnerId() . '/calendar-proxy-read';
			}

			if ($proxy->getPermissions() === (ProxyMapper::PERMISSION_READ | ProxyMapper::PERMISSION_WRITE)) {
				$groups[] = $proxy->getOwnerId() . '/calendar-proxy-write';
			}
		}

		return $groups;
	}

	/**
	 * Updates the list of group members for a group principal.
	 *
	 * The principals should be passed as a list of uri's.
	 *
	 * @param string $principal
	 * @param string[] $members
	 * @throws Exception|\OCP\DB\Exception
	 */
	public function setGroupMemberSet(string $principal, array $members) {
		[$principalUri, $target] = split($principal);

		if ($target !== 'calendar-proxy-write' && $target !== 'calendar-proxy-read') {
			throw new Exception('Setting members of the group is not supported yet');
		}

		$masterPrincipalArray = $this->getPrincipalByPath($principalUri);
		if (!$masterPrincipalArray) {
			throw new Exception('Principal not found');
		}

		$permission = ProxyMapper::PERMISSION_READ;
		if ($target === 'calendar-proxy-write') {
			$permission |= ProxyMapper::PERMISSION_WRITE;
		}

		[$prefix, $owner] = split($principalUri);
		$proxies = $this->proxyMapper->getProxiesOf($principalUri);

		foreach ($members as $member) {
			[$prefix, $name] = split($member);

			if ($prefix !== $this->principalPrefix) {
				throw new Exception('Invalid member group prefix: ' . $prefix);
			}

			$principalArray = $this->getPrincipalByPath($member);
			if (!$principalArray) {
				throw new Exception('Principal not found');
			}

			$found = false;
			foreach ($proxies as $proxy) {
				if ($proxy->getProxyId() === $member) {
					$found = true;
					$proxy->setPermissions($proxy->getPermissions() | $permission);
					$this->proxyMapper->update($proxy);

					$proxies = array_filter($proxies, function (Proxy $p) use ($proxy) {
						return $p->getId() !== $proxy->getId();
					});
					break;
				}
			}

			if ($found === false) {
				$proxy = new Proxy();
				$proxy->setOwnerId($principalUri);
				$proxy->setProxyId($member);
				$proxy->setPermissions($permission);
				$this->proxyMapper->insert($proxy);
			}
		}

		// Delete all remaining proxies
		foreach ($proxies as $proxy) {
			// Write and Read Proxies have individual requests,
			// so only delete proxies of this permission
			if ($proxy->getPermissions() === $permission) {
				$this->proxyMapper->delete($proxy);
			}
		}
	}

	/**
	 * @param string $principalUri
	 * @return bool
	 */
	private function isProxyPrincipal(string $principalUri):bool {
		[$realPrincipalUri, $proxy] = split($principalUri);
		[$prefix, $userId] = split($realPrincipalUri);

		if (!isset($prefix, $userId)) {
			return false;
		}
		if ($prefix !== $this->principalPrefix) {
			return false;
		}

		return $proxy === 'calendar-proxy-read'
			|| $proxy === 'calendar-proxy-write';
	}

	/**
	 * @param string $principalUri
	 * @return bool
	 */
	private function isReadProxyPrincipal(string $principalUri):bool {
		[, $proxy] = split($principalUri);
		return $proxy === 'calendar-proxy-read';
	}

	/**
	 * @param string $principalUri
	 * @return bool
	 */
	private function isWriteProxyPrincipal(string $principalUri):bool {
		[, $proxy] = split($principalUri);
		return $proxy === 'calendar-proxy-write';
	}

	/**
	 * @param string $principalUri
	 * @return string
	 */
	private function getPrincipalUriFromProxyPrincipal(string $principalUri):string {
		[$realPrincipalUri, ] = split($principalUri);
		return $realPrincipalUri;
	}
}
