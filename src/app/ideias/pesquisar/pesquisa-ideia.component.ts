import { Component, OnInit } from '@angular/core';

import { IdeiaService, Ideia } from '../shared';
import { DashboardIdeiaComponent } from '../dashboard';

@Component({
  selector: 'app-pesquisa-ideia',
  templateUrl: './pesquisa-ideia.component.html',
  styleUrls: ['./pesquisa-ideia.component.css']
})
export class PesquisarIdeiaComponent implements OnInit {

  ideias: Ideia[] = [];
  ideia: Ideia = new Ideia();
  dashboard: DashboardIdeiaComponent;

  constructor(private ideiaService: IdeiaService) {}

  ngOnInit(
  ) {}

  pesquisar(event) {
    event.preventDefault()
    const target = event.target
    this.ideia.nome = target.querySelector('#nome').value    
    this.ideiaService.buscaPorNomeIdeia(this.ideia)
    .subscribe(ideias => this.ideias = ideias);  
  }
  
  /*listaPorCategorias(ideia: Ideia): void{
    this.ideiaService.buscaPorCategoria(ideia)
    .subscribe(ideias => this.ideias = ideias);   
  } */
}
