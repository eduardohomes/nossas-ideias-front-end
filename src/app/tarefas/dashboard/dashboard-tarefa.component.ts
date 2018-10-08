import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router'; 

import { TarefaService, Tarefa } from '../shared';

@Component({
  selector: 'app-dashboard-tarefa',
  templateUrl: './dashboard-tarefa.component.html',
  styleUrls: ['./dashboard-tarefa.component.css']
})
export class DashboardTarefaComponent implements OnInit {

  tarefas: Tarefa[];

  constructor(private tarefaService: TarefaService,
  	private route: ActivatedRoute,
  	private router: Router) {}

  ngOnInit() {
  	this.tarefas = this.dashboardTodos();
  }

  dashboardTodos(): Tarefa[] {
  	return this.tarefaService.listarTodos();
  }

  somarGostou(id: number): void {  
      this.tarefaService.somarGostou(id);
      this.tarefas = this.dashboardTodos(); 
  } 
  somarNaoGostou(id: number): void {  
    this.tarefaService.somarNaoGostou(id);
    this.tarefas = this.dashboardTodos(); 
  } 
  marcarGostei(id: number): void {  
    this.tarefaService.marcarGostei(id);
    this.tarefas = this.dashboardTodos(); 
  }
}
