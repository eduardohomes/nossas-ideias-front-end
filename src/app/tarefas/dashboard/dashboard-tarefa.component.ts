import { Component, OnInit } from '@angular/core';

import { TarefaService, Tarefa } from '../shared';

@Component({
  selector: 'app-dashboard-tarefa',
  templateUrl: './dashboard-tarefa.component.html',
  styleUrls: ['./dashboard-tarefa.component.css']
})
export class DashboardTarefaComponent implements OnInit {

  tarefas: Tarefa[];

  constructor(private tarefaService: TarefaService) {}

  ngOnInit() {
  	this.tarefas = this.dashboardTodos();
  }

  dashboardTodos(): Tarefa[] {
  	return this.tarefaService.listarTodos();
  }

}
