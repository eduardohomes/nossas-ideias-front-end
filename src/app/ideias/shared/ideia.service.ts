import { Injectable } from '@angular/core';

import { Ideia, Voto } from '.';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Comentario } from './comentario.model';
import { Usuario } from './usuario.model';
import { Router } from '@angular/router';
import { Favorita } from './favorita.model';

@Injectable()
export class IdeiaService {  

  private urlIdeias = "http://localhost:8080/api/ideias";      
  private urlComentarios = "http://localhost:8080/api/comentarios";      
  private urlVotos = "http://localhost:8080/api/votos";      
  private urlLogin = "http://localhost:8080/api/user";      
  private urlFavorita = "http://localhost:8080/api/favoritas";
  
  ideias: Ideia[];
  ideia: Ideia; 
  usuario: Usuario; 
  comentario: Comentario; 
  comentarios: Comentario[];
  token = "";

  constructor(private http: HttpClient, private router: Router) { }
  authenticated = false;

  buscaToken() {
    this.token = localStorage.getItem('token').toString();
  }

  authenticate(credentials) {        
    return this.http.post(this.urlLogin, credentials);    
  }

  listarTodasIdeias (): Observable<any> {    
    return this.http.get<any>(this.urlIdeias);
  } 
  
  listarTodosComentarios (id: number): Observable<any> {
    const url = `${this.urlComentarios}/${id}`;        
    return this.http.get<any>(url);
  }

  cadastrarNovaIdeia(ideia: Ideia): Observable<Ideia> {        
  	return this.http.put<Ideia>(this.urlIdeias, ideia);
  }

  cadastrarComentarioIdeia(id: number, comentario: Comentario): Observable<Comentario> {   
    return this.http.post<Comentario>(this.urlComentarios, comentario);
  }

  buscarIdeiaId(id: number): Observable<any> {
    const url = `${this.urlIdeias}/${id}`;
    return this.http.get<any>(url);
  }

  atualizarIdeia (ideia: Ideia): Observable<any> {
    return this.http.put(this.urlIdeias, ideia);
  }

  votar (voto: Voto): Observable<Voto> {       
    return this.http.post<Voto>(this.urlVotos, voto);
  }

  favoritar (favorita: Favorita): Observable<Favorita> {       
    return this.http.post<Favorita>(this.urlFavorita, favorita);
  }
}
