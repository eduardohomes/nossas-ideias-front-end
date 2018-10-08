import { Injectable } from '@angular/core';

import { Tarefa } from './';
import { NumberSymbol } from '@angular/common';

@Injectable()
export class TarefaService {

  constructor() { }

  listarTodos(): Tarefa[] {
  	const tarefas = localStorage['tarefas'];
  	return tarefas ? JSON.parse(tarefas) : [];
  }

  cadastrar(tarefa: Tarefa): void {
    const tarefas = this.listarTodos();    
    tarefa.id = new Date().getTime();
    tarefa.situacao = "Pendente"
    tarefa.qtdGostou = 0
    tarefa.qtdNaoGostou = 0
    tarefa.comentario = []
    tarefa.favorito = false
  	tarefas.push(tarefa);
  	localStorage['tarefas'] = JSON.stringify(tarefas);
  }

  buscarPorId(id: number): Tarefa {
    const tarefas: Tarefa[] = this.listarTodos();
    return tarefas.find(tarefa => tarefa.id === id);
  }

  atualizar(tarefa: Tarefa): void {
    const tarefas: Tarefa[] = this.listarTodos();
    tarefas.forEach((obj, index, objs) => { 
      if (tarefa.id === obj.id) {
        objs[index] = tarefa;
      }
    });
    localStorage['tarefas'] = JSON.stringify(tarefas);
  }

  remover(id: number): void {
    let tarefas: Tarefa[] = this.listarTodos();
    tarefas = tarefas.filter(tarefa => tarefa.id !== id);
    localStorage['tarefas'] = JSON.stringify(tarefas);
  }

  alterarStatus(id: number): void {
    const tarefas: Tarefa[] = this.listarTodos();
    tarefas.forEach((obj, index, objs) => { 
      if (id === obj.id) {
        switch(obj.situacao) { 
          case "Aprovada": { 
            objs[index].situacao = "Aprovada";   
             break; 
          } 
          case "Em Andamento": { 
            objs[index].situacao = "Em Andamento";   
             break; 
          }
          case "Finalizada": { 
            objs[index].situacao = "Finalizada"; 
            break; 
         } 
       }
      }
    });
    localStorage['tarefas'] = JSON.stringify(tarefas);
  }

  somarGostou(id: number): void {
    const tarefas: Tarefa[] = this.listarTodos();
    tarefas.forEach((obj, index, objs) => { 
      if (id === obj.id) {
        objs[index].qtdGostou = objs[index].qtdGostou + 1;  
      }
    });
    localStorage['tarefas'] = JSON.stringify(tarefas);
  }

  somarNaoGostou(id: number): void {
    const tarefas: Tarefa[] = this.listarTodos();
    tarefas.forEach((obj, index, objs) => { 
      if (id === obj.id) {
        objs[index].qtdNaoGostou = objs[index].qtdNaoGostou + 1;  
      }
    });
    localStorage['tarefas'] = JSON.stringify(tarefas);
  }

  comentar(id: number, texto: string): void {
    const tarefas: Tarefa[] = this.listarTodos();
    const comentario: string [] = tarefas.find(tarefa => tarefa.id === id).comentario;
    const contador: number = comentario.length;           
    tarefas.forEach((obj, index, objs) => { 
      if (id === obj.id) {          
          objs[index].comentario[contador] = texto;
      }
    });    
    localStorage['tarefas'] = JSON.stringify(tarefas);
  } 

  buscarPorComentario(id: number): String [] {
    const tarefas: Tarefa[] = this.listarTodos();    
    const comentario: string [] = tarefas.find(tarefa => tarefa.id === id).comentario;
    return comentario;
  }

  marcarGostei(id: number): void {
    const tarefas: Tarefa[] = this.listarTodos();
    tarefas.forEach((obj, index, objs) => { 
      if (id === obj.id) {
        objs[index].favorito = true;  
      }
    });
    localStorage['tarefas'] = JSON.stringify(tarefas);
  }
}
