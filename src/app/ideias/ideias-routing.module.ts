import { Routes } from '@angular/router';

import { ListarIdeiaComponent } from './listar';
import { CadastrarIdeiaComponent } from './cadastrar';
import { EditarIdeiaComponent } from './editar';
import { ComentarIdeiaComponent } from './comentar';
import { DashboardIdeiaComponent } from './dashboard';
import { LoginComponent } from './login/login.component';
import { PesquisarIdeiaComponent } from './pesquisar';
import { ModalSucessoComponent } from './modal';
import { LogoutComponent } from './logout/logout.component';
import { ListarPesquisaIdeiaComponent } from './listarPesquisa';

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
		path: 'ideias/logout', 
		component: LogoutComponent
	},
	{ 
		path: 'ideias/modal', 
		component: ModalSucessoComponent
	},
	{ 
		path: 'ideias/pesquisar', 
		component: PesquisarIdeiaComponent
	},
	{ 
		path: 'ideias/listarPesquisa', 
		component: ListarPesquisaIdeiaComponent
	},
];
