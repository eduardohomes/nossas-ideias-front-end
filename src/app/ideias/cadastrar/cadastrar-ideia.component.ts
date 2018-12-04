import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms'; 

import { IdeiaService, Ideia } from '../shared';
import { Categoria } from '../shared/categoria.model';

@Component({
  selector: 'app-cadastrar-ideia',
  templateUrl: './cadastrar-ideia.component.html',
  styleUrls: ['./cadastrar-ideia.component.css'],
  
})
export class CadastrarIdeiaComponent implements OnInit {

  @ViewChild('formIdeia') formIdeia: NgForm;
  ideias: Ideia[] = [];
  categorias: Categoria[] = [];
  ideia: Ideia = new Ideia();

  constructor(private ideiaService: IdeiaService,
  	private router: Router) { }

  ngOnInit() {  
    this.listaCategorias();   
  } 

  cadastrar(): void {    
    if (this.formIdeia.form.valid) { 
      this.ideia.comentario_Avaliador = "";
      this.ideia.idCategoria =  1;
      this.ideia.ativa = "S";
      var isAdmin = sessionStorage.getItem("user");
      if (isAdmin== "1") {
        this.ideia.situacao = "Em Execução";
      } else {
        this.ideia.situacao = "Aberta";
      }
      this.ideiaService.cadastrarNovaIdeia(this.ideia)
      .subscribe(ideia => {
        alert('ideia cadastrada com  sucesso')
        this.router.navigate(['ideias/dashboard']);
      }); 
    }   
  }
  listaCategorias(): void{
    this.ideiaService.listaCategoria()
    .subscribe(categorias => this.categorias = categorias);   
  }
}
