import { Component } from '@angular/core';

@Component({
	selector: 'app-menu-bar',
	templateUrl: './menu-bar.component.html',
	styleUrls: ['./menu-bar.component.css'],
})
export class MenuBarComponent {
	isExpanded: boolean = false;

	expand() {
		if (this.isExpanded) {
			this.isExpanded = false;
		} else {
			this.isExpanded = true;
		}
		console.log(this.isExpanded);
	}
}
