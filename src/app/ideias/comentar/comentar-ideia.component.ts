import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms'; 

import { IdeiaService } from '../shared';
import { Comentario } from '../shared/comentario.model';

@Component({
  selector: 'app-comentar-ideia',
  templateUrl: './comentar-ideia.component.html',
  styleUrls: ['./comentar-ideia.component.css']
})
export class ComentarIdeiaComponent implements OnInit {

  @ViewChild('formComentario') formComentario: NgForm;
  comentarios: Comentario[] = [];
  comentario: Comentario = new Comentario();
  
  constructor(private ideiaService: IdeiaService,
    private route: ActivatedRoute,
    private router: Router
  	) { }

  ngOnInit() {
    this.listarTodosComentarios();
  }

  comentar(comentario: string): void {      
    if (this.formComentario.form.valid) {      
      this.comentario.idIdeia = +this.route.snapshot.paramMap.get('id');        
      this.comentario.comentario = comentario;
      this.ideiaService.cadastrarComentarioIdeia(this.comentario)
      .subscribe(comentario => {
        this.comentarios.push(comentario);
      });
    }
    alert("Comentário Salvo com Sucesso");   
    this.router.navigate(['ideias/dashboard']); 
    window.location.reload();
  }

  listarTodosComentarios(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.ideiaService.listarTodosComentarios(id)
    .subscribe(comentarios => this.comentarios = comentarios);         
  }
}
