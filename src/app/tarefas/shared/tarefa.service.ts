import { Injectable } from '@angular/core';

import { Tarefa, Voto } from './';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { Comentario } from './comentario.model';
import { Usuario } from './usuario.model';
import { Router } from '@angular/router';
import { Favorita } from './favorita.model';

@Injectable()
export class TarefaService {  

  private urlIdeias = "http://localhost:8080/api/ideias";      
  private urlComentarios = "http://localhost:8080/api/comentarios";      
  private urlVotos = "http://localhost:8080/api/votos";      
  private urlLogin = "http://localhost:8080/api/user";      
  private urlFavorita = "http://localhost:8080/api/favoritas";
  
  tarefas: Tarefa[];
  tarefa: Tarefa; 
  usuario: Usuario; 
  comentario: Comentario; 
  comentarios: Comentario[];
  
  constructor(private httpClient: HttpClient, private router: Router) { }
  authenticated = false;

  authenticate(credentials) {        
  	return this.httpClient.post(this.urlLogin, credentials);
  }

  listarTodasIdeias (): Observable<any> {
    return this.httpClient.get<any>(this.urlIdeias)
      .pipe(
        map(data => data['content'])        
      );
  } 

  listarTodosComentarios (id: number): Observable<any> {
    const url = `${this.urlComentarios}/${id}`;        
    return this.httpClient.get<any>(url);
  }

  cadastrarNovaIdeia(tarefa: Tarefa): Observable<Tarefa> {        
  	return this.httpClient.post<Tarefa>(this.urlIdeias, tarefa);
  }

  cadastrarComentarioIdeia(id: number, comentario: Comentario): Observable<Comentario> {   
    return this.httpClient.post<Comentario>(this.urlComentarios, comentario);
  }

  buscarIdeiaId(id: number): Observable<any> {
    const url = `${this.urlIdeias}/${id}`;
    return this.httpClient.get<any>(url);
  }

  atualizarIdeia (tarefa: Tarefa): Observable<any> {
    return this.httpClient.put(this.urlIdeias, tarefa);
  }

  votar (voto: Voto): Observable<Voto> {       
    return this.httpClient.post<Voto>(this.urlVotos, voto);
  }

  favoritar (favorita: Favorita): Observable<Favorita> {       
    return this.httpClient.post<Voto>(this.urlFavorita, favorita);
  }
}
