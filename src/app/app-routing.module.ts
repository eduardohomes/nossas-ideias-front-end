import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IdeiaRoutes } from './ideias';


export const routes: Routes = [
	{ 
		path: '', 
		redirectTo: '/ideias/login', 
		pathMatch: 'full' 
	},
	...IdeiaRoutes,	
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
