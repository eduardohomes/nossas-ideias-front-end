import { Component, OnInit } from '@angular/core';

import { TarefaService, Tarefa } from '../shared';

@Component({
  selector: 'app-listar-tarefa',
  templateUrl: './listar-tarefa.component.html',
  styleUrls: ['./listar-tarefa.component.css']
})
export class ListarTarefaComponent implements OnInit {

  tarefas: Tarefa[];

  constructor(private tarefaService: TarefaService) {}

  ngOnInit() {
    this.listarTodosNovo();
  }

  listarTodosNovo(): void {
    this.tarefaService.listarTodasIdeias()
    .subscribe(tarefas => this.tarefas = tarefas);     
  }

}
