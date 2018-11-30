import { Component, OnInit } from '@angular/core';

import { IdeiaService, Ideia } from '../shared';

@Component({
  selector: 'app-listar-ideia',
  templateUrl: './listar-ideia.component.html',
  styleUrls: ['./listar-ideia.component.css']
})
export class ListarIdeiaComponent implements OnInit {

  ideias: Ideia[];

  constructor(private ideiaService: IdeiaService) {}

  ngOnInit() {
    this.listarTodosNovo();
  }

  listarTodosNovo(): void {
    this.ideiaService.listarTodasIdeias()
    .subscribe(ideias => this.ideias = ideias);     
  }

}
