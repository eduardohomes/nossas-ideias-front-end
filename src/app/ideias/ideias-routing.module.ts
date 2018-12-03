import { Routes } from '@angular/router';

import { ListarIdeiaComponent } from './listar';
import { CadastrarIdeiaComponent } from './cadastrar';
import { EditarIdeiaComponent } from './editar';
import { ComentarIdeiaComponent } from './comentar';
import { LogarIdeiaComponent } from './logar';
import { DashboardIdeiaComponent } from './dashboard';
import { LoginComponent } from './login/login.component';
import { ModalSucessoComponent } from './modal';
import { PesquisarIdeiaComponent } from './pesquisa';

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
		component: LoginComponent
	},
	{ 
		path: 'ideias/modal', 
		component: ModalSucessoComponent
	},
	{ 
		path: 'ideias/pesquisa', 
		component: PesquisarIdeiaComponent
	}
];
