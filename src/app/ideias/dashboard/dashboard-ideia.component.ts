import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; 

import { IdeiaService, Voto, Usuario, Ideia } from '../shared';
import { Favorita } from '../shared/favorita.model';
import { Categoria } from '../shared/categoria.model';

@Component({
  selector: 'app-dashboard-ideia',
  templateUrl: './dashboard-ideia.component.html',
  styleUrls: ['./dashboard-ideia.component.css']
})
export class DashboardIdeiaComponent implements OnInit {

  usuario: Usuario; 
  listcategorias: Categoria[] = [];
  ideiasEmAlta: Ideia[] = [];
  ultimasIdeias: Ideia[] = [];
  listFavoritas: Ideia [] = [];  
  votos: Voto [] = [];
  voto: Voto = new Voto();
  listVotos: Voto [] = [];
  favorita: Favorita = new Favorita();
  credentials = {username: ''};
  ideia: Ideia = new Ideia();
  idCategoria: number;
  

  constructor(private ideiaService: IdeiaService,
    private router: Router)
     {}

  ngOnInit() {    
    this.listaEmAltas();
    this.listaUltimasIdeias();   
    this.listaFavoritas();
    this.listaPorCategorias();
  }

  pesquisarIdeia(event) {
    event.preventDefault()
    const target = event.target
    const nomeIdeia = target.querySelector('#nome').value
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
    this.ideiaService.buscaPorCategoria(this.ideia)
      .subscribe(ideia => {
        alert('Lista de Ideias')
        this.router.navigate(['/ideia/pesquisa', ideia]);
      }); 
  }     
  
  listaPorCategorias(): void{
    this.ideiaService.listarPorCategoria()
    .subscribe(listcategorias => this.listcategorias = listcategorias);   
  }

  listaEmAltas(): void {           
    this.ideiaService.listaEmAlta()
    .subscribe(ideiasEmAlta => this.ideiasEmAlta = ideiasEmAlta);  
  }  

  listaFavoritas(): void {           
    this.ideiaService.listaFavoritas()
    .subscribe(listFavoritas => this.listFavoritas = listFavoritas);  
  }  

  listaUltimasIdeias(): void {           
    this.ideiaService.listaUltimasIdeias()
    .subscribe(ultimasIdeias => this.ultimasIdeias = ultimasIdeias);  
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

  favoritar(idIdeia: number) {
    this.favorita.idIdeia = idIdeia;   
    this.ideiaService.votar(this.voto)
      .subscribe(voto => {
        this.votos.push(voto);
      });
    alert("Voto Salvo com Sucesso");   
  }  

  listaVotos(): void{
    this.ideiaService.listaVotos()
    .subscribe(listVotos => this.listVotos = listVotos);   
  }

}
