import { Component, Input } from '@angular/core';
@Component({
	selector: 'app-nav-options',
	templateUrl: './nav-options.component.html',
	styleUrls: ['./nav-options.component.css'],
})
export class NavOptionsComponent {
	constructor() {}
	isDropdownOpen: boolean = false;
	@Input()
	title: string = '';
	toggleDropDown() {
		this.isDropdownOpen = !this.isDropdownOpen;
	}
}
