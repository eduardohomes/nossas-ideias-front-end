import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms'; 

import { TarefaService, Tarefa } from '../shared';

@Component({
  selector: 'app-comentar-tarefa',
  templateUrl: './comentar-tarefa.component.html',
  styleUrls: ['./comentar-tarefa.component.css']
})
export class ComentarTarefaComponent implements OnInit {

  @ViewChild('formComentario') formComentario: NgForm;
  tarefa: Tarefa;  
  tarefas: Tarefa[];
  id: number;
  
  constructor(
    private tarefaService: TarefaService,
    private router: Router, 
    private route: ActivatedRoute  
  ) {      
      this.id = parseInt(this.route.snapshot.params.id);
   }

  ngOnInit() {
    this.tarefa = new Tarefa(0, "", "", "", 0,0,"");     
    return this.tarefaService.listarTodos();             
  }

  comentar(comentario: string): void {     
    if (this.formComentario.form.valid) {        
  	  this.tarefaService.comentar(this.id, comentario);
  	  //this.router.navigate(["/tarefas"]);
    }
  }
  listarTodos(): Tarefa[] {
  	return this.tarefaService.listarTodos();
  }
}
