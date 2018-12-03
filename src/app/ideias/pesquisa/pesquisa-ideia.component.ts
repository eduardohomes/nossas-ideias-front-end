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
  dashboard: DashboardIdeiaComponent;

  constructor(private ideiaService: IdeiaService) {}

  ngOnInit() {}
  
}
