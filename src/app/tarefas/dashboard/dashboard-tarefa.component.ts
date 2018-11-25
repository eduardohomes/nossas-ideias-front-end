import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'; 

import { TarefaService, Voto, Dashboard } from '../shared';
import { Favorita } from '../shared/favorita.model';

@Component({
  selector: 'app-dashboard-tarefa',
  templateUrl: './dashboard-tarefa.component.html',
  styleUrls: ['./dashboard-tarefa.component.css']
})
export class DashboardTarefaComponent implements OnInit {

  votos: Voto[];
  tarefas: Dashboard[];
  favoritas: Favorita[];
  voto: Voto;
  favorita: Favorita = new Favorita;

  constructor(private tarefaService: TarefaService,
  	private route: ActivatedRoute) {}

  ngOnInit() {    
    this.voto = new Voto(0,"", 0);
    this.dashboardTodosNovo();
  }
  
  dashboardTodosNovo(): void {       
    this.tarefaService.listarTodasIdeias()
    .subscribe(tarefas => {
      this.tarefas = tarefas
    }); 
  }  

  somarGostou(idIdeia: number): void {          
    this.voto.idIdeia = idIdeia;   
    this.voto.voto = "S";
    this.tarefaService.votar(this.voto)
      .subscribe(voto => {
        this.votos.push(voto);
      });
    alert("Voto Salvo com Sucesso");   
  }

  somarNaoGostou(idIdeia: number): void {          
    this.voto.idIdeia = idIdeia;   
    this.voto.voto = "N";
    this.tarefaService.votar(this.voto)
      .subscribe(voto => {
        this.votos.push(voto);
      });
    alert("Voto Salvo com Sucesso");   
  }

  marcarGostei(idIdeia: number, idUSuario: number): void {          
    this.favorita.idIdeia = idIdeia;
    this.favorita.idUser = 1;
    this.tarefaService.favoritar(this.favorita)
      .subscribe(favorita => {
        this.votos.push(favorita);
      });
      alert("Marcado");
  }
  desmarcarGostei(idIdeia: number, idUSuario: number): void {          
    this.favorita.idIdeia = idIdeia;
    this.favorita.idUser = 1;
    this.tarefaService.favoritar(this.favorita)
      .subscribe(favorita => {
        this.votos.push(favorita);
      });
      alert("Desmarcado");
  }
    
}
