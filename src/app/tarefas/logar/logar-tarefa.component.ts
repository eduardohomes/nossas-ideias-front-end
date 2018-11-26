import { Component, OnInit, ViewChild } from '@angular/core';

import { TarefaService, Tarefa, Usuario } from '../shared';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logar-tarefa',
  templateUrl: './logar-tarefa.component.html',
  styleUrls: ['./logar-tarefa.component.css']
})
export class LogarTarefaComponent implements OnInit {

  constructor(private tarefaService: TarefaService, private router: Router, private cookieService: CookieService) {}
  

  @ViewChild('formUsuario') formUsuario: NgForm;
  usuario: Usuario;
  credentials = {username: '', password: ''};
  cookieValue = 'UNKNOWN';

  ngOnInit( ) { }

  login() {
    this.tarefaService.authenticate(this.credentials)
      .subscribe(usuario => {
        this.usuario = usuario,

        this.router.navigate(["/tarefas/dashboard"])
      });
  }
  
}
