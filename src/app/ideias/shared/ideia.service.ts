import { Injectable } from '@angular/core';

import { Ideia, Voto } from '.';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Comentario } from './comentario.model';
import { Usuario } from './usuario.model';
import { Router } from '@angular/router';
import { Favorita } from './favorita.model';
import { Categoria } from './categoria.model';

@Injectable()
export class IdeiaService {  

  private urlIdeias = "http://localhost:8080/api/ideias";
  private urlListaEmAlta = "http://localhost:8080/api/ideias/listaEmAlta";
  private urlListaUltimasIdeias = "http://localhost:8080/api/ideias/listaUltimasIdeias";
  private urlListaFavoritas = "http://localhost:8080/api/ideias/listaFavoritas";      
  private urlBuscaPorCategoria = "http://localhost:8080/api/ideias/buscaPorCategoria";      
  private urlComentarios = "http://localhost:8080/api/comentarios";      
  private urlVotos = "http://localhost:8080/api/votos";      
  private urlListaPorCategoria = "http://localhost:8080/api/ideias/listaPorCategoria";      
  private urlLogin = "http://localhost:8080/api/login";      
  private urlFavorita = "http://localhost:8080/api/favoritas";
  
  ideias: Ideia[];
  categorias: Categoria[];
  ideia: Ideia = new Ideia(); 
  usuario: Usuario; 
  comentario: Comentario; 
  comentarios: Comentario[];
  favorita: Favorita;
  voto: Voto;
  token: String;

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': '$2a$10$vW6LdCdJiEGFGgqenKsMDeTnh44DhmOpjb2PHBNr4dEsJqbJvMhg6'
    })
  };

  constructor(private http: HttpClient, private router: Router) { }
  authenticated = false;

  buscaToken() {
    this.token = sessionStorage.getItem('token');
  }

  authenticate(credentials) {        
    return this.http.post(this.urlLogin, credentials);    
  }

  listaVotos(): Observable<any> {
    this.buscaToken();
    return this.http.get<any>(this.urlVotos, this.httpOptions );
  }

  listarPorCategoria(): Observable<any> {
    this.buscaToken();
    return this.http.get<any>(this.urlListaPorCategoria, this.httpOptions );
  }

  listaEmAlta (): Observable<any> {    
    this.buscaToken();
    return this.http.get<any>(this.urlListaEmAlta, this.httpOptions);
  } 

  listaUltimasIdeias (): Observable<any> {    
    this.buscaToken();
    return this.http.get<any>(this.urlListaUltimasIdeias, this.httpOptions);
  } 
  
  listaFavoritas (): Observable<any> { 
    this.buscaToken();   
    return this.http.get<any>(this.urlListaFavoritas, this.httpOptions);
  } 

  listarTodosComentarios (id: number): Observable<any> {
    this.buscaToken();   
    const url = `${this.urlComentarios}/${id}`;        
    return this.http.get<any>(url,this.httpOptions);
  }

  cadastrarNovaIdeia(ideia: Ideia): Observable<Ideia> {        
    this.buscaToken();
  	return this.http.post<Ideia>(this.urlIdeias, ideia, this.httpOptions);
  }

  cadastrarComentarioIdeia(comentario: Comentario): Observable<Comentario> {   
    this.buscaToken();
    return this.http.post<Comentario>(this.urlComentarios, comentario, this.httpOptions);
  }

  buscarIdeiaId(id: number): Observable<any> {
    this.buscaToken();
    const url = `${this.urlIdeias}/${id}`;
    return this.http.get<any>(url, this.httpOptions);
  }

  atualizarIdeia (ideia: Ideia): Observable<any> {
    this.buscaToken();
    return this.http.put(this.urlIdeias, ideia, this.httpOptions);
  }

  votar (voto: Voto): Observable<Voto> {       
    this.buscaToken();
    return this.http.post<Voto>(this.urlVotos, voto, this.httpOptions);
  }

  favoritar (favorita: Favorita): Observable<Favorita> {       
    return this.http.post<Favorita>(this.urlFavorita, favorita);
  }

  buscaPorCategoria (ideia: Ideia): Observable<any> {       
    return this.http.put<Ideia>(this.urlBuscaPorCategoria, ideia, this.httpOptions);
  }
}
