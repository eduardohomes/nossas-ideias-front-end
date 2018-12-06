import { Component, OnInit } from '@angular/core';

import { IdeiaService, Ideia } from '../shared';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-listar-pesquisa-ideia',
  templateUrl: './listar-pesquisa-ideia.component.html',
  styleUrls: ['./listar-pesquisa-ideia.component.css']
})
export class ListarPesquisaIdeiaComponent implements OnInit {

  listaIdeias: Ideia[] = [];
  ideia: Ideia = new Ideia();

  constructor(private ideiaService: IdeiaService, private route: ActivatedRoute,
    private router: Router) {}

  ngOnInit() {
    this.listarPesquisa();
  }

  listarPesquisa() {
    const nome = +this.route.snapshot.paramMap.get('nome');
    const idCategoria = +this.route.snapshot.paramMap.get('idCategoria');
    this.ideia.nome = nome.toString();
    this.ideia.idCategoria = idCategoria;
    this.ideiaService.buscaPorCategoria(this.ideia)
    .subscribe(listaIdeias => this.listaIdeias = listaIdeias); 

  }
  

}
