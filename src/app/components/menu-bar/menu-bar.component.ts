import {
	trigger,
	state,
	style,
	transition,
	animate,
} from '@angular/animations';
import { Component, Input } from '@angular/core';

@Component({
	selector: 'app-menu-bar',
	templateUrl: './menu-bar.component.html',
	styleUrls: ['./menu-bar.component.css'],
	animations: [
		trigger('dropdownAnimation', [
			state('void', style({ opacity: 0, transform: 'translateY(-20px)' })),
			transition('void <=> *', animate('300ms ease-in-out')),
		]),
	],
})
export class MenuBarComponent {
	@Input()
	plataform1: string = '';

	isDropdownOpen: boolean = true;

	toggleDropDown(event: Event) {
		event.stopPropagation();
		this.isDropdownOpen = !this.isDropdownOpen;
	}
}
