import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { IdeiaService, AuthService} from './shared';
import { ListarIdeiaComponent } from './listar';
import { CadastrarIdeiaComponent } from './cadastrar';
import { EditarIdeiaComponent } from './editar';
import { DashboardIdeiaComponent } from './dashboard';
import { ComentarIdeiaComponent } from './comentar';
import { LogarIdeiaComponent } from './logar';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { HttpClientModule } from '@angular/common/http';
import { PesquisarIdeiaComponent } from './pesquisar';
import { ModalSucessoComponent } from './modal';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    HttpClientModule
  ],
  declarations: [
  	ListarIdeiaComponent,
  	CadastrarIdeiaComponent,
    EditarIdeiaComponent,
    DashboardIdeiaComponent,
    ComentarIdeiaComponent,
    LogarIdeiaComponent,
    LoginComponent,
    LogoutComponent,
    ModalSucessoComponent,
    PesquisarIdeiaComponent

  ],
  providers: [
    IdeiaService,
    AuthService
  ]
})
export class IdeiasModule { }
