import {
	trigger,
	state,
	style,
	transition,
	animate,
} from '@angular/animations';
import { Component, OnDestroy, OnInit } from '@angular/core';

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
export class MenuBarComponent implements OnInit, OnDestroy {
	jogosDropdown: boolean = false;
	ps5Dropdown: boolean = false;
	playstationLogo: string = '../../../assets/img/playstation-logo.svg';

	toggleDropDown(event: Event) {
		event.stopPropagation();
		this.jogosDropdown = !this.jogosDropdown;
		this.ps5Dropdown = false;
	}

	toggleDropdownPs5(event: Event) {
		event.stopPropagation();
		this.ps5Dropdown = !this.ps5Dropdown;
		this.jogosDropdown = false;
	}

	closeDropdown() {
		this.jogosDropdown = false;
		this.ps5Dropdown = false;
	}

	ngOnInit() {
		// Adiciona um ouvinte de clique ao documento para fechar o dropdown quando o usuário clicar fora dele
		document.addEventListener('click', () => {
			this.closeDropdown();
		});
	}

	ngOnDestroy() {
		// Remove o ouvinte de clique ao destruir o componente para evitar vazamentos de memória
		document.removeEventListener('click', () => {
			this.closeDropdown();
		});
	}
}
