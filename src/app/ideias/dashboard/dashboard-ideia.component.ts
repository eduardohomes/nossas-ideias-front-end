import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; 

import { Favorita,Categoria, IdeiaService, Voto, Usuario, Ideia } from '../shared';
import { first } from 'rxjs/operators';
import { HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-dashboard-ideia',
  templateUrl: './dashboard-ideia.component.html',
  styleUrls: ['./dashboard-ideia.component.css']
})
export class DashboardIdeiaComponent implements OnInit {

  listcategorias: Categoria[] = [];
  listVotos: Voto [] = [];
  listFavoritas: Ideia [] = [];  
  listUltimasCadastradas: Ideia [] = [];  
  listEmAltas: Ideia [] = [];  
  votos: Voto [] = [];  
  voto: Voto = new Voto();
  favorita: Favorita = new Favorita();
  usuario: Usuario = new Usuario();   
  ideia: Ideia = new Ideia();
  idCategoria: number;
  user: string;
      
  constructor(private ideiaService: IdeiaService,
    private router: Router)
     {}

  ngOnInit() {
    this.user = sessionStorage.getItem('user');
    this.listaEmAltas();
    this.listaUltimasIdeias();   
    this.listaFavoritas();
    this.listaPorCategorias();        
  }

  contaVotos(): void{
    this.ideiaService.contaVotos()
    .subscribe(listVotos => this.listVotos = listVotos);  
  }
  
  buscaPorCategoria(event) {
    event.preventDefault()
    const target = event.target
    const nomeIdeia = target.querySelector('#campoBusca').value
    const selectd = target.querySelector("#categorias").selectedIndex
    switch(selectd) {                  
        case 1: 
          this.idCategoria = 1;
          break;
        case 2: 
          this.idCategoria = 2;
          break;
        case 3: 
          this.idCategoria = 3;
          break;
        case 4: 
          this.idCategoria = 5;
          break;
        default:
          alert("Categoria Invalida");
          this.router.navigate(['ideias/dashboard']);          
    }
    this.ideia.nome = nomeIdeia;
    this.ideia.idCategoria = this.idCategoria;       
    this.router.navigate(['/ideias/listarPesquisa', this.ideia]);
  }     
  
  listaPorCategorias(): void{
    this.ideiaService.listarPorCategoria()
    .subscribe(listcategorias => this.listcategorias = listcategorias);  
  }

  listaEmAltas(): void {           
    this.ideiaService.listaEmAlta()
    .subscribe(listEmAlta => this.listEmAltas = listEmAlta);  
  } 
  
  listaUltimasIdeias(): void {           
    this.ideiaService.listaUltimasIdeias()
    .subscribe(listUltimasCadastrada => this.listUltimasCadastradas = listUltimasCadastrada);
  } 

  listaFavoritas(): void {           
    this.ideiaService.listaFavoritas()
    .subscribe(listFavorita => {        
      this.listFavoritas = listFavorita
    }); 
    
  }

  somarGostou(idIdeia: number): void {    
    this.voto.idIdeia = idIdeia;   
    this.voto.voto = "S";
    this.ideiaService.votar(this.voto)
      .subscribe(voto => {
        this.votos.push(voto);        
    });       
  }

  somarNaoGostou(idIdeia: number): void {          
    this.voto.idIdeia = idIdeia;   
    this.voto.voto = "N";
    this.ideiaService.votar(this.voto)
      .subscribe(voto => {
        this.votos.push(voto);
      });
  }

  favoritar(idIdeia: number) {
    this.favorita.idIdeia = idIdeia;    
    this.ideiaService.favoritar(this.favorita)
      .subscribe(favorita => {
        this.listFavoritas.push(favorita);
      });                
      window.location.reload();
  }  

}
