import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import { IdeiaService, Ideia } from '../shared';
import { Categoria } from '../shared/categoria.model';

@Component({
  selector: 'app-cadastrar-ideia',
  templateUrl: './cadastrar-ideia.component.html',
  styleUrls: ['./cadastrar-ideia.component.css'],
  
})
export class CadastrarIdeiaComponent implements OnInit {

  ideias: Ideia[] = [];
  categorias: Categoria[] = [];
  ideia: Ideia = new Ideia();

  constructor(private ideiaService: IdeiaService,
  	private router: Router) { }

  ngOnInit() {  
    this.listaCategorias();   
  } 

  cadastrar(event) {
    event.preventDefault()
    const target = event.target
    this.ideia.ativa = "S";
    this.ideia.nome = target.querySelector('#nome').value
    this.ideia.descricao = target.querySelector('#descricao').value
    const selectd = target.querySelector("#categoria").selectedIndex
    switch(selectd) {                  
        case 0: 
          this.ideia.idCategoria = 1;
          break;
        case 1: 
          this.ideia.idCategoria = 2;
          break;
        case 2: 
          this.ideia.idCategoria = 3;
          break;
        case 3: 
          this.ideia.idCategoria = 4;
          break;
        default:
          alert("Categoria Invalida");
          this.router.navigate(['ideias/dashboard']);          
    }
    var isAdmin = sessionStorage.getItem("user");
      if (isAdmin== "1") {
        this.ideia.situacao = "Em Execução";
      } else {
        this.ideia.situacao = "Aberta";
      }
      this.ideiaService.cadastrarNovaIdeia(this.ideia)
      .subscribe(ideia => {        
        this.router.navigate(['ideias/dashboard']);
        alert('ideia cadastrada com  sucesso')
      });     
  }
  listaCategorias(): void{
    this.ideiaService.listaCategoria()
    .subscribe(categorias => this.categorias = categorias);   
  }
}
