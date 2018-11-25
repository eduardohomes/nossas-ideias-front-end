import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { TarefaService} from './shared';
import { ListarTarefaComponent } from './listar';
import { CadastrarTarefaComponent } from './cadastrar';
import { EditarTarefaComponent } from './editar';
import { DashboardTarefaComponent } from './dashboard';
import { ComentarTarefaComponent } from './comentar';
import { LogarTarefaComponent } from './logar';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],
  declarations: [
  	ListarTarefaComponent,
  	CadastrarTarefaComponent,
    EditarTarefaComponent,
    DashboardTarefaComponent,
    ComentarTarefaComponent,
    LogarTarefaComponent
  ],
  providers: [
  	TarefaService
  ]
})
export class TarefasModule { }
