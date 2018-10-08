import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { 
  TarefaService, 
  TarefaConcluidaDirective 
} from './shared';
import { ListarTarefaComponent } from './listar';
import { CadastrarTarefaComponent } from './cadastrar';
import { EditarTarefaComponent } from './editar';
import { DashboardTarefaComponent } from './dashboard';
import { ComentarTarefaComponent } from './comentar';

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
    TarefaConcluidaDirective,
    ComentarTarefaComponent
  ],
  providers: [
  	TarefaService
  ]
})
export class TarefasModule { }
