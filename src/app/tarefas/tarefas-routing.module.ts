import { Routes } from '@angular/router';

import { ListarTarefaComponent } from './listar';
import { CadastrarTarefaComponent } from './cadastrar';
import { DashboardTarefaComponent } from './dashboard';
import { EditarTarefaComponent } from './editar';
import { ComentarTarefaComponent } from './comentar';

export const TarefaRoutes: Routes = [
	{ 
		path: 'tarefas', 
		redirectTo: 'tarefas/dashboard' 
	},
	{ 
		path: 'tarefas/dashboard', 
		component: DashboardTarefaComponent 
	},
	{ 
		path: 'tarefas/listar', 
		component: ListarTarefaComponent 
	}, 
	{ 
		path: 'tarefas/cadastrar', 
		component: CadastrarTarefaComponent 
	},
	{ 
		path: 'tarefas/editar/:id', 
		component: EditarTarefaComponent 
	},
	{ 
		path: 'tarefas/comentar/:id', 
		component: ComentarTarefaComponent 
	}
];
