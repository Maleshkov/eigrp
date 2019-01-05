import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { CharacteristicsComponent } from './characteristics.component';


const routes: Routes = [{
	path: '',
	data: {
        title: 'Характеристики на протокола EIGRP',
		urls: [{title: 'Dashboard',url: '/'},{title: 'Начало'}]
    },
	component: CharacteristicsComponent
}];

@NgModule({
	imports: [
    	FormsModule,
    	CommonModule, 
    	RouterModule.forChild(routes)
    ],
	declarations: [CharacteristicsComponent]
})
export class CharacteristicsModule { }