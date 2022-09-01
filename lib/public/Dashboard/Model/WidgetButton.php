<?php

declare(strict_types=1);
/**
 * @copyright Copyright (c) 2022 Robin Appelman <robin@icewind.nl>
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
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 *
 */

namespace OCP\Dashboard\Model;

class WidgetButton {
	const TYPE_NEW = 'new';
	const TYPE_MORE = 'more';
	const TYPE_SETUP = 'setup';

	private string $type;
	private string $link;
	private string $text;

	public function __construct(string $type, string $link, string $text) {
		$this->type = $type;
		$this->link = $link;
		$this->text = $text;
	}

	/**
	 * Get the button type, either "new", "more" or "setup"
	 *
	 * @return string
	 */
	public function getType(): string {
		return $this->type;
	}

	/**
	 * Get the absolute url the buttons links to
	 *
	 * @return string
	 */
	public function getLink(): string {
		return $this->link;
	}

	/**
	 * Get the translated text for the button
	 *
	 * @return string
	 */
	public function getText(): string {
		return $this->text;
	}
}
