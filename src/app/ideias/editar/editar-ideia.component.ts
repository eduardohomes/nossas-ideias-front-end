import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'; 
import { Location } from '@angular/common';
import { NgForm } from '@angular/forms'; 

import { IdeiaService, Ideia } from '../shared';
import { Categoria } from '../shared/categoria.model';

@Component({
  selector: 'app-editar-ideia',
  templateUrl: './editar-ideia.component.html',
  styleUrls: ['./editar-ideia.component.css']
})
export class EditarIdeiaComponent implements OnInit {

  @ViewChild('formIdeia') formIdeia: NgForm;
  ideia: Ideia = new Ideia();
  ideias: Ideia[] = [];   
  categorias: Categoria[] = [];
  
  constructor(
    private ideiaService: IdeiaService,
    private route: ActivatedRoute,
    private  router: Router,
  	private location: Location) {}

  ngOnInit() {       
    this.buscarPorId();
    this.listaCategorias();
  }
  
  buscarPorId(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.ideiaService.buscarIdeiaId(id)
      .subscribe(ideias => this.ideia = ideias);
  }

  voltar(): void {
    this.location.back();
  }

  cadastrar(event) {
    event.preventDefault()
    const target = event.target
    this.ideia.ativa = "S";
    this.ideia.nome = target.querySelector('#nome').value
    this.ideia.descricao = target.querySelector('#descricao').value
    /*const selectd = target.querySelector("#categoria").selectedIndex
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
    }*/
    this.ideia.situacao = target.querySelector("#situacao").value
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
