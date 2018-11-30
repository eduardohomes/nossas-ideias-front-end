import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router'; 
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
  ideia: Ideia;
  ideias: Ideia[]; 
  
  constructor(
    private ideiaService: IdeiaService,
  	private route: ActivatedRoute,
  	private location: Location) {}

  ngOnInit() {       
    this.buscarPorId();
  }
  
  buscarPorId(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.ideiaService.buscarIdeiaId(id)
      .subscribe(ideia => this.ideia = ideia);
  }

  voltar(): void {
    this.location.back();
  }

  atualizar(): void {
    this.ideiaService.atualizarIdeia(this.ideia )
      .subscribe(() => this.voltar());
  }  
}
