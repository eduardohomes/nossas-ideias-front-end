import { Component, OnInit } from '@angular/core';

import { IdeiaService, Ideia } from '../shared';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pesquisa-ideia',
  templateUrl: './pesquisa-ideia.component.html',
  styleUrls: ['./pesquisa-ideia.component.css']
})
export class PesquisarIdeiaComponent implements OnInit {

  ideias: Ideia[] = [];
  ideia: Ideia = new Ideia();
    
  constructor(private ideiaService: IdeiaService, private router: ActivatedRoute ) {
    
  }

  ngOnInit(
    
  ) {}

  pesquisarPorCategoria() {    
    this.ideia.idCategoria = this.router.snapshot.params['idCategoria'];
    this.ideia.nome = this.router.snapshot.params['nome'];

    
    /*this.ideiaService.buscaPorCategoria(this.ideia)
    .subscribe(ideias => this.ideias = ideias);  */
  } 

  pesquisarPorNome(event) {
    event.preventDefault()
    const target = event.target
    this.ideia.nome = target.querySelector('#nome').value    
    this.ideiaService.buscaPorNomeIdeia(this.ideia)
    .subscribe(ideias => this.ideias = ideias);  
  }  
}
