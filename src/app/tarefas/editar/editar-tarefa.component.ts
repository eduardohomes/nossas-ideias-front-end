import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router'; 
import { Location } from '@angular/common';
import { NgForm } from '@angular/forms'; 

import { TarefaService, Tarefa } from '../shared';

@Component({
  selector: 'app-editar-tarefa',
  templateUrl: './editar-tarefa.component.html',
  styleUrls: ['./editar-tarefa.component.css']
})
export class EditarTarefaComponent implements OnInit {

  @ViewChild('formTarefa') formTarefa: NgForm;
  tarefa: Tarefa;
  tarefas: Tarefa[]; 
  
  constructor(
    private tarefaService: TarefaService,
  	private route: ActivatedRoute,
  	private location: Location) {}

  ngOnInit() {       
    this.buscarPorId();
  }
  
  buscarPorId(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.tarefaService.buscarIdeiaId(id)
      .subscribe(tarefa => this.tarefa = tarefa);
  }

  voltar(): void {
    this.location.back();
  }

  atualizar(): void {
    this.tarefaService.atualizarIdeia(this.tarefa )
      .subscribe(() => this.voltar());
  }  
}
