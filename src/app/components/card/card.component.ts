import { Component, Input } from '@angular/core';

@Component({
	selector: 'app-card',
	templateUrl: './card.component.html',
	styleUrls: ['./card.component.css'],
})
export class CardComponent {
	// Input oriundo de card-label component
	@Input()
	gameLabel: string = '';
	// input deste component pai
	@Input()
	cardImg: string = '';

	//Inputs oriundos de card-price component
	@Input()
	gameType: string = '';
	@Input()
	gamePrice: string = '';
}
