import { Component } from '@angular/core';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.css'],
})
export class HomeComponent {
	fortniteImg: string =
		'https://image.api.playstation.com/vulcan/ap/rnd/202311/2801/803e41fee0edf8f8ed1de518e6eac60ddf30ac485b9a16a2.png?w=440&thumb=false';
	fifaImg: string =
		'https://image.api.playstation.com/vulcan/ap/rnd/202310/0214/c21c0669eaca7f3e02c41cad5e1a20f867aafcf14104f046.png?w=440&thumb=false';
}
