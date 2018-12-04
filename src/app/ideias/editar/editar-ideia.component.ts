import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'; 
import { Location } from '@angular/common';
import { NgForm } from '@angular/forms'; 

import { IdeiaService, Ideia } from '../shared';

@Component({
  selector: 'app-editar-ideia',
  templateUrl: './editar-ideia.component.html',
  styleUrls: ['./editar-ideia.component.css']
})
export class EditarIdeiaComponent implements OnInit {

  @ViewChild('formIdeia') formIdeia: NgForm;
  ideia: Ideia = new Ideia();
  ideias: Ideia[] = [];   
  
  constructor(
    private ideiaService: IdeiaService,
    private route: ActivatedRoute,
    private  router: Router,
  	private location: Location) {}

  ngOnInit() {       
    this.buscarPorId();
  }
  
  buscarPorId(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.ideiaService.buscarIdeiaId(id)
      .subscribe(ideias => this.ideia = ideias);
  }

  voltar(): void {
    this.location.back();
  }

  loginUser(event) {
    event.preventDefault()
    const target = event.target
    this.ideia.nome = target.querySelector('#nome').value
    this.ideia.descricao = target.querySelector('#descricao').value
    this.ideia.comentario_Avaliador = target.querySelector('#comentario').value
    this.ideia.situacao = target.querySelector("#situacao").value
    this.ideiaService.atualizarIdeia(this.ideia).subscribe(() => this.voltar());    
    alert("Ideia Atualizada");
    this.router.navigate(['/ideias/dashboard', this.ideia]);
  }
 
}
