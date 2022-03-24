<?php
/**
 * @copyright Copyright (c) 2016, ownCloud, Inc.
 *
 * @author Christoph Wurst <christoph@winzerhof-wurst.at>
 * @author Joas Schilling <coding@schilljs.com>
 * @author Thomas Müller <thomas.mueller@tmit.eu>
 *
 * @license AGPL-3.0
 *
 * This code is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License, version 3,
 * as published by the Free Software Foundation.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License, version 3,
 * along with this program. If not, see <http://www.gnu.org/licenses/>
 *
 */
namespace OCA\DAV\CardDAV;

use Sabre\CardDAV\Backend\BackendInterface as CardDAVBackendInterface;
use Sabre\DAV\INode;
use Sabre\DAVACL\PrincipalBackend\BackendInterface as DAVACLBackendInterface;
use OCA\DAV\AppInfo\PluginManager;

class AddressBookRoot extends \Sabre\CardDAV\AddressBookRoot {
	private PluginManager $pluginManager;

	public function __construct(DAVACLBackendInterface $principalBackend,
								CardDAVBackendInterface $carddavBackend,
								PluginManager $pluginManager,
								$principalPrefix = 'principals') {
		parent::__construct($principalBackend, $carddavBackend, $principalPrefix);
		$this->pluginManager = $pluginManager;
	}

	/**
	 * This method returns a node for a principal.
	 *
	 * The passed array contains principal information, and is guaranteed to
	 * at least contain a uri item. Other properties may or may not be
	 * supplied by the authentication backend.
	 *
	 * @param array $principal
	 *
	 * @return INode
	 */
	public function getChildForPrincipal(array $principal) {
		return new UserAddressBooks($this->carddavBackend, $principal['uri'], $this->pluginManager);
	}

	public function getName() {
		if ($this->principalPrefix === 'principals') {
			return parent::getName();
		}
		// Grabbing all the components of the principal path.
		$parts = explode('/', $this->principalPrefix);

		// We are only interested in the second part.
		return $parts[1];
	}
}
