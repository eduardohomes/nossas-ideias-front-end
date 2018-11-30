import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'; 

import { IdeiaService, Voto, Dashboard, Usuario } from '../shared';
import { Favorita } from '../shared/favorita.model';

@Component({
  selector: 'app-dashboard-ideia',
  templateUrl: './dashboard-ideia.component.html',
  styleUrls: ['./dashboard-ideia.component.css']
})
export class DashboardIdeiaComponent implements OnInit {

  votos: Voto[];
  dashboards: Dashboard[];
  favoritas: Favorita[];
  voto: Voto;
  favorita: Favorita = new Favorita;
  credentials = {username: ''};

  constructor(private ideiaService: IdeiaService,
  	private route: ActivatedRoute) {}

  ngOnInit() {    
    this.voto = new Voto(0,"", 0);
    this.dashboardTodosNovo();
  }
  
  dashboardTodosNovo(): void {           
    this.ideiaService.listarTodasIdeias()
    .subscribe(dashboards => this.dashboards = dashboards);  
  }  

  somarGostou(idIdeia: number): void {          
    this.voto.idIdeia = idIdeia;   
    this.voto.voto = "S";
    this.ideiaService.votar(this.voto)
      .subscribe(voto => {
        this.votos.push(voto);
      });
    alert("Voto Salvo com Sucesso");   
  }

  somarNaoGostou(idIdeia: number): void {          
    this.voto.idIdeia = idIdeia;   
    this.voto.voto = "N";
    this.ideiaService.votar(this.voto)
      .subscribe(voto => {
        this.votos.push(voto);
      });
    alert("Voto Salvo com Sucesso");   
  }

  marcarGostei(idIdeia: number, idUSuario: number): void {          
    this.favorita.idIdeia = idIdeia;
    this.favorita.idUser = 1;
    this.ideiaService.favoritar(this.favorita)
      .subscribe(favorita => {
        this.votos.push(favorita);
      });
      alert("Marcado");
  }
  
  desmarcarGostei(idIdeia: number, idUSuario: number): void {          
    this.favorita.idIdeia = idIdeia;
    this.favorita.idUser = 1;
    this.ideiaService.favoritar(this.favorita)
      .subscribe(favorita => {
        this.votos.push(favorita);
      });
      alert("Desmarcado");
  }
    
}