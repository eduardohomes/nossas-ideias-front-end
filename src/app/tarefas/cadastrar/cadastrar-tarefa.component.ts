import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms'; 

import { TarefaService, Tarefa } from '../shared';

@Component({
  selector: 'app-cadastrar-tarefa',
  templateUrl: './cadastrar-tarefa.component.html',
  styleUrls: ['./cadastrar-tarefa.component.css']
})
export class CadastrarTarefaComponent implements OnInit {

  @ViewChild('formTarefa') formTarefa: NgForm;
  tarefas: Tarefa[];
  tarefa: Tarefa;

  constructor(private tarefaService: TarefaService,
  	private router: Router) { }

  ngOnInit() {  
    this.tarefa = new Tarefa(0, "", "", "", "","");	    
  } 

  cadastrar(): void {    
    if (this.formTarefa.form.valid) {    
      this.tarefa.situacao = "Pendente";  
      this.tarefaService.cadastrarNovaIdeia(this.tarefa)
      .subscribe(tarefa => {
        alert('ideia cadastrada com  sucesso')
        this.router.navigate(['tarefas/dashboard']);
      });
    }   
  }
}
