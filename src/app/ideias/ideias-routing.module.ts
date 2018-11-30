import { Routes } from '@angular/router';

import { ListarIdeiaComponent } from './listar';
import { CadastrarIdeiaComponent } from './cadastrar';
import { EditarIdeiaComponent } from './editar';
import { ComentarIdeiaComponent } from './comentar';
import { LogarIdeiaComponent } from './logar';
import { DashboardIdeiaComponent } from './dashboard';

export const IdeiaRoutes: Routes = [
	{ 
		path: 'ideias', 
		redirectTo: 'ideias/login' 
	},	
	{ 
		path: 'ideias/dashboard', 
		component: DashboardIdeiaComponent 
	}, 
	{ 
		path: 'ideias/listar', 
		component: ListarIdeiaComponent 
	}, 
	{ 
		path: 'ideias/cadastrar', 
		component: CadastrarIdeiaComponent 
	},
	{ 
		path: 'ideias/editar/:id', 
		component: EditarIdeiaComponent 
	},
	{ 
		path: 'ideias/comentar/:id', 
		component: ComentarIdeiaComponent 
	},
	{ 
		path: 'ideias/login', 
		component: LogarIdeiaComponent
	}	
];
