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

  atualizar(event) {
    event.preventDefault()
    const target = event.target
    this.ideia.ativa = "S";
    this.ideia.nome = target.querySelector('#nome').value
    this.ideia.descricao = target.querySelector('#descricao').value
    
    this.ideiaService.atualizarIdeia(this.ideia)
    .subscribe(ideia => {        
      alert('ideia cadastrada com  sucesso')
    });
    this.router.navigate(['ideias/editar']);
    
  }

  
  listaCategorias(): void{
    this.ideiaService.listaCategoria()
    .subscribe(categorias => this.categorias = categorias);   
  }
}
