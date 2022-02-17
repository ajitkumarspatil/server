<?php
/**
 * @copyright Copyright (c) 2022 Cyrille Bollu <cyrille@bollu.be>
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
namespace OCA\Files_Sharing\BackgroundJob;

use \OCP\AppFramework\Utility\ITimeFactory;
use \OCP\BackgroundJob\TimedJob;
use \OCP\EventDispatcher\IEventDispatcher;
use \OCP\IDBConnection;
use \OCP\Security\IHasher;
use \OCP\Security\ISecureRandom;

class ResetExpiredPasswordsJob extends TimedJob {

	/** @var IDBConnection */
	private $connection;

	/** @var IEventDispatcher */
	private $eventDispatcher;

	/** @var IHasher */
	private $hasher;

	/** @var ISecureRandom */
	private $secureRandom;

	public function __construct(IDBConnection $connection, IEventDispatcher $eventDispatcher,
		IHasher $hasher, ISecureRandom $secureRandom, ITimeFactory $time) {

		parent::__construct($time);

		$this->connection = $connection;
		$this->eventDispatcher = $eventDispatcher;
		$this->hasher = $hasher;
		$this->secureRandom = $secureRandom;

		// Runs at most every 5 minutes
		parent::setInterval(300);
	}

	// Sets a random password to shares whose password has expired
	protected function run($argument) {
		$qb = $this->connection->getQueryBuilder();

		// QUESTION: DOES THE DATETIME COMPARAISON WORK WELL WHEN TIMEZONES ENTER THE GAME?
		// I THINK SO, BECAUSE EVERYTHING HAPPENS ON THE SERVER, HENCE ON THE SAME TZ
		$qb->select('id')
			->from('share')
			->where($qb->expr()->lte('password_expiration_time', $qb->createNamedParameter((new \DateTime())->format('Y-m-d H:i:s'))));

		$result = $qb->execute();
		while ($row = $result->fetch()) {

			// Generates a random password respecting any password policy defined
			$event = new \OCP\Security\Events\GenerateSecurePasswordEvent();
			$this->eventDispatcher->dispatchTyped($event);
			$password = $event->getPassword() ?? $this->hasher->hash($this->secureRandom->generate(20));

			// Updates share password and expiration time
			$qb->update('share')
				->where($qb->expr()->eq('id', $qb->createNamedParameter($row['id'])))
				->set('password', $qb->createNamedParameter($password))
				->set('password_expiration_time', $qb->createNamedParameter((new \DateTime())->add(new \DateInterval('P1D'))->format('Y-m-d H:i:s')))
				->execute();
		}

	}

}
