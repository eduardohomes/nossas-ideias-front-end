import { Injectable } from '@angular/core';

import { Ideia, Voto, Categoria, Usuario, Comentario, Favorita } from '.';
import { HttpClient, HttpHeaders, HttpResponse} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';


@Injectable()
export class IdeiaService {  

  private urlIdeias = "http://localhost:8080/api/ideias";
  private urlIdeiasAtualizar = "http://localhost:8080/api/ideias/atualizar";
  private urlListaPendenteAvaliacao = "http://localhost:8080/api/ideias/listaPendenteAvaliacao";
  private urlListaEmAlta = "http://localhost:8080/api/ideias/listaEmAlta";
  private urlListaUltimasIdeias = "http://localhost:8080/api/ideias/listaUltimasIdeias";
  private urlListaFavoritas = "http://localhost:8080/api/ideias/listaFavoritas";      
  private urlBuscaPorCategoria = "http://localhost:8080/api/ideias/buscaPorCategoria";      
  private urlBuscaPorNome = "http://localhost:8080/api/ideias/buscaPorNome";      
  private urlComentarios = "http://localhost:8080/api/comentarios";      
  private urlVotos = "http://localhost:8080/api/votos/";      
  private urlVotosTodos = "http://localhost:8080/api/votos/todos";      
  private urlContaVotos = "http://localhost:8080/api/votos/contaVotos";      
  private urlListaPorCategoria = "http://localhost:8080/api/ideias/listaPorCategoria";      
  private urlCategorias = "http://localhost:8080/api/categorias";      
  private urlLogin = "http://localhost:8080/api/login";      
  private urlFavorita = "http://localhost:8080/api/favoritas";
  
  ideias: Ideia[] = [];
  categorias: Categoria[] = [];
  ideia: Ideia = new Ideia(); 
  usuario: Usuario = new Usuario (); 
  comentario: Comentario = new Comentario(); 
  comentarios: Comentario[] = [];
  favorita: Favorita = new Favorita();
  voto: Voto = new Voto();
  token: String;

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': sessionStorage.getItem('token').replace(/"/g, '')
    })
  };

  
  constructor(private http: HttpClient, private router: Router) { }
  authenticated = false;

  authenticate(credentials) {        
    return this.http.post(this.urlLogin, credentials);    
  }
 
  contaVotos(): Observable<any> {    
    return this.http.get<any>(this.urlContaVotos, this.httpOptions );
  }

  listarPendenteAvaliacao(): Observable<any> {    
    return this.http.get<any>(this.urlListaPendenteAvaliacao, this.httpOptions );
  }

  listaVotos(): Observable<any> {
    return this.http.get<any>(this.urlVotosTodos, this.httpOptions );
  }

  listaVotosPorIdeia(idIdeia: number): Observable<any> {
    return this.http.put<any>(this.urlVotos, idIdeia, this.httpOptions );
  }

  listarPorCategoria(): Observable<any> {
    return this.http.get<any>(this.urlListaPorCategoria, this.httpOptions );
  }

  listaCategoria(): Observable<any> {
    return this.http.get<any>(this.urlCategorias, this.httpOptions );
  }
  
  listaEmAlta (): Observable<any> {    
    return this.http.get<any>(this.urlListaEmAlta, this.httpOptions);
  } 

  listaUltimasIdeias (): Observable<any> {    
    return this.http.get<any>(this.urlListaUltimasIdeias, this.httpOptions);
  } 
  
  listaFavoritas (): Observable<any> { 
    return this.http.get<any>(this.urlListaFavoritas, this.httpOptions);
  } 

  listarTodosComentarios (id: number): Observable<any> {
    const url = `${this.urlComentarios}/${id}`;        
    return this.http.get<any>(url,this.httpOptions);
  }

  cadastrarNovaIdeia(ideia: Ideia): Observable<Ideia> {        
  	return this.http.post<Ideia>(this.urlIdeias, ideia, this.httpOptions);
  }

  cadastrarComentarioIdeia(comentario: Comentario): Observable<Comentario> {   
    return this.http.post<Comentario>(this.urlComentarios, comentario, this.httpOptions);
  }

  buscarIdeiaId(id: number): Observable<any> {
    const url = `${this.urlIdeias}/${id}`;
    return this.http.get<any>(url, this.httpOptions);
  }

  atualizarIdeia (ideia: Ideia): Observable<any> {
    return this.http.put(this.urlIdeiasAtualizar, ideia, this.httpOptions);
  }

  votar (voto: Voto): Observable<any> {           
    return this.http.post(this.urlVotos, voto, this.httpOptions);
  }

  favoritar (favorita: Favorita): Observable<Favorita> {    
    return this.http.post<Favorita>(this.urlFavorita, favorita, this.httpOptions);
  }

  buscaPorCategoria (ideia: Ideia): Observable<any> {       
    return this.http.put<Ideia>(this.urlBuscaPorCategoria, ideia, this.httpOptions);
  }

  buscaPorNomeIdeia (ideia: Ideia): Observable<any> {       
    return this.http.put<any>(this.urlBuscaPorNome, ideia, this.httpOptions);    
  }
}
