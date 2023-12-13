import { Component, Input } from '@angular/core';

@Component({
	selector: 'app-dropdown-options',
	templateUrl: './dropdown-options.component.html',
	styleUrls: ['./dropdown-options.component.css'],
})
export class DropdownOptionsComponent {
	@Input()
	plataformIcon: string = ''
	@Input()
	plataform:string=''
	
	ps5Icon: string = '../../../../../assets/img/ps5-icon.png';
	ps4Icon: string = '../../../../../assets/img/ps4-icon.png';
	psVr2Icon: string = '../../../../../assets/img/ps-vr2-icon.png';
	pcIcon: string = '../../../../../assets/img/pc-ico.png';
	psPlusIcon: string = '../../../../../assets/img/ps-plus-icon.png';
}
