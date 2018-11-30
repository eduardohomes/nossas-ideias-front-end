import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { IdeiaService} from './shared';
import { ListarIdeiaComponent } from './listar';
import { CadastrarIdeiaComponent } from './cadastrar';
import { EditarIdeiaComponent } from './editar';
import { DashboardIdeiaComponent } from './dashboard';
import { ComentarIdeiaComponent } from './comentar';
import { LogarIdeiaComponent } from './logar';
import { CookieService } from 'ngx-cookie-service';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],
  declarations: [
  	ListarIdeiaComponent,
  	CadastrarIdeiaComponent,
    EditarIdeiaComponent,
    DashboardIdeiaComponent,
    ComentarIdeiaComponent,
    LogarIdeiaComponent
  ],
  providers: [
    IdeiaService,
    CookieService 
  ]
})
export class IdeiasModule { }
