<?php
/**
 * @copyright Copyright (c) 2016, ownCloud, Inc.
 *
 * @author Arthur Schiwon <blizzz@arthur-schiwon.de>
 * @author Bjoern Schiessle <bjoern@schiessle.org>
 * @author Joas Schilling <coding@schilljs.com>
 * @author Morris Jobke <hey@morrisjobke.de>
 * @author Roeland Jago Douma <roeland@famdouma.nl>
 * @author Thomas Citharel <nextcloud@tcit.fr>
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
namespace OCA\DAV\Tests\unit\CardDAV;

use Exception;
use OCA\DAV\CardDAV\CardDavBackend;
use OCA\DAV\CardDAV\Converter;
use OCA\DAV\CardDAV\SyncService;
use OCP\IUser;
use OCP\IUserManager;
use PHPUnit\Framework\MockObject\MockObject;
use Psr\Log\LoggerInterface;
use Sabre\DAV\Exception\BadRequest;
use Sabre\VObject\Component\VCard;
use Test\TestCase;

class SyncServiceTest extends TestCase {
	/**
	 * @throws Exception
	 */
	public function testEmptySync() {
		$backend = $this->getBackendMock(0, 0, 0);

		$ss = $this->getSyncServiceMock($backend, []);
		$return = $ss->syncRemoteAddressBook('', 'system', 'system', '1234567890', null, '1', 'principals/system/system', []);
		$this->assertEquals('sync-token-1', $return);
	}

	/**
	 * @throws Exception
	 */
	public function testSyncWithNewElement() {
		$backend = $this->getBackendMock(1, 0, 0);
		$backend->method('getCard')->willReturn(false);

		$ss = $this->getSyncServiceMock($backend, ['0' => [200 => '']]);
		$return = $ss->syncRemoteAddressBook('', 'system', 'system', '1234567890', null, '1', 'principals/system/system', []);
		$this->assertEquals('sync-token-1', $return);
	}

	/**
	 * @throws Exception
	 */
	public function testSyncWithUpdatedElement() {
		$backend = $this->getBackendMock(0, 1, 0);
		$backend->method('getCard')->willReturn(true);

		$ss = $this->getSyncServiceMock($backend, ['0' => [200 => '']]);
		$return = $ss->syncRemoteAddressBook('', 'system', 'system', '1234567890', null, '1', 'principals/system/system', []);
		$this->assertEquals('sync-token-1', $return);
	}

	/**
	 * @throws Exception
	 */
	public function testSyncWithDeletedElement() {
		$backend = $this->getBackendMock(0, 0, 1);

		$ss = $this->getSyncServiceMock($backend, ['0' => [404 => '']]);
		$return = $ss->syncRemoteAddressBook('', 'system', 'system', '1234567890', null, '1', 'principals/system/system', []);
		$this->assertEquals('sync-token-1', $return);
	}

	/**
	 * @throws BadRequest
	 */
	public function testEnsureSystemAddressBookExists() {
		/** @var CardDavBackend | MockObject $backend */
		$backend = $this->getMockBuilder(CardDavBackend::class)->disableOriginalConstructor()->getMock();
		$backend->expects($this->exactly(1))->method('createAddressBook');
		$backend->expects($this->exactly(2))->method('getAddressBooksByUri')->willReturnOnConsecutiveCalls(null, []);

		/** @var IUserManager $userManager */
		$userManager = $this->getMockBuilder(IUserManager::class)->disableOriginalConstructor()->getMock();
		$logger = $this->getMockBuilder(LoggerInterface::class)->disableOriginalConstructor()->getMock();
		$converter = $this->createMock(Converter::class);

		$ss = new SyncService($backend, $userManager, $logger, $converter);
		$ss->ensureSystemAddressBookExists('principals/users/adam', 'contacts', []);
	}

	public function dataActivatedUsers(): array {
		return [
			[true, 1, 1, 1],
			[false, 0, 0, 3],
		];
	}

	/**
	 * @dataProvider dataActivatedUsers
	 */
	public function testUpdateAndDeleteUser(bool $activated, int $createCalls, int $updateCalls, int $deleteCalls): void {
		/** @var CardDavBackend | MockObject $backend */
		$backend = $this->getMockBuilder(CardDavBackend::class)->disableOriginalConstructor()->getMock();
		$logger = $this->getMockBuilder(LoggerInterface::class)->disableOriginalConstructor()->getMock();

		$backend->expects($this->exactly($createCalls))->method('createCard');
		$backend->expects($this->exactly($updateCalls))->method('updateCard');
		$backend->expects($this->exactly($deleteCalls))->method('deleteCard');

		$backend->method('getCard')->willReturnOnConsecutiveCalls(false, [
			'carddata' => "BEGIN:VCARD\r\nVERSION:3.0\r\nPRODID:-//Sabre//Sabre VObject 3.4.8//EN\r\nUID:test-user\r\nFN:test-user\r\nN:test-user;;;;\r\nEND:VCARD\r\n\r\n"
		]);

		$backend->method('getAddressBooksByUri')
			->with('principals/system/system', 'system')
			->willReturn(['id' => -1]);

		/** @var IUserManager | MockObject $userManager */
		$userManager = $this->getMockBuilder(IUserManager::class)->disableOriginalConstructor()->getMock();

		/** @var IUser | MockObject $user */
		$user = $this->getMockBuilder(IUser::class)->disableOriginalConstructor()->getMock();
		$user->method('getBackendClassName')->willReturn('unittest');
		$user->method('getUID')->willReturn('test-user');
		$user->method('getCloudId')->willReturn('cloudId');
		$user->method('getDisplayName')->willReturn('test-user');
		$user->method('isEnabled')->willReturn($activated);
		$converter = $this->createMock(Converter::class);
		$converter->expects($this->any())
			->method('createCardFromUser')
			->willReturn($this->createMock(VCard::class));

		$ss = new SyncService($backend, $userManager, $logger, $converter);
		$ss->updateUser($user);

		$ss->updateUser($user);

		$ss->deleteUser($user);
	}

	private function getBackendMock(int $createCount, int $updateCount, int $deleteCount): MockObject {
		$backend = $this->getMockBuilder(CardDavBackend::class)
			->disableOriginalConstructor()
			->getMock();
		$backend->expects($this->exactly($createCount))->method('createCard');
		$backend->expects($this->exactly($updateCount))->method('updateCard');
		$backend->expects($this->exactly($deleteCount))->method('deleteCard');
		return $backend;
	}

	/**
	 * @param $backend
	 * @param $response
	 * @return SyncService|MockObject
	 */
	private function getSyncServiceMock($backend, $response) {
		$userManager = $this->getMockBuilder(IUserManager::class)->disableOriginalConstructor()->getMock();
		$logger = $this->getMockBuilder(LoggerInterface::class)->disableOriginalConstructor()->getMock();
		$converter = $this->createMock(Converter::class);
		/** @var SyncService | MockObject $ss */
		$ss = $this->getMockBuilder(SyncService::class)
			->onlyMethods(['ensureSystemAddressBookExists', 'requestSyncReport', 'download', 'getCertPath'])
			->setConstructorArgs([$backend, $userManager, $logger, $converter])
			->getMock();
		$ss->method('requestSyncReport')->withAnyParameters()->willReturn(['response' => $response, 'token' => 'sync-token-1']);
		$ss->method('ensureSystemAddressBookExists')->willReturn(['id' => 1]);
		$ss->method('download')->willReturn([
			'body' => '',
			'statusCode' => 200,
			'headers' => []
		]);
		$ss->method('getCertPath')->willReturn('');
		return $ss;
	}
}
