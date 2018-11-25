import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms'; 

import { TarefaService, Tarefa } from '../shared';
import { Comentario } from '../shared/comentario.model';

@Component({
  selector: 'app-comentar-tarefa',
  templateUrl: './comentar-tarefa.component.html',
  styleUrls: ['./comentar-tarefa.component.css']
})
export class ComentarTarefaComponent implements OnInit {

  @ViewChild('formComentario') formComentario: NgForm;
  comentarios: Comentario[];
  comentario: Comentario;
  
  constructor(private tarefaService: TarefaService,
    private route: ActivatedRoute
  	) { }

  ngOnInit() {
    this.listarTodosComentarios();
    this.comentario = new Comentario(0,"", 0);
  }

  comentar(comentario: string): void {      
    if (this.formComentario.form.valid) {      
      this.comentario.idIdeia = +this.route.snapshot.paramMap.get('id');        
      this.comentario.comentario = comentario;
      this.tarefaService.cadastrarComentarioIdeia(this.comentario.idIdeia,this.comentario)
      .subscribe(comentario => {
        this.comentarios.push(comentario);
      });
    }
    alert("Comentário Salvo com Sucesso");    
  }

  listarTodosComentarios(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.tarefaService.listarTodosComentarios(id)
    .subscribe(comentarios => this.comentarios = comentarios);     
  }
}
