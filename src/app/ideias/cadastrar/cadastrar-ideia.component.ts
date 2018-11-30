import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms'; 

import { IdeiaService, Ideia } from '../shared';

@Component({
  selector: 'app-cadastrar-ideia',
  templateUrl: './cadastrar-ideia.component.html',
  styleUrls: ['./cadastrar-ideia.component.css']
})
export class CadastrarIdeiaComponent implements OnInit {

  @ViewChild('formIdeia') formIdeia: NgForm;
  ideias: Ideia[];
  ideia: Ideia;

  constructor(private ideiaService: IdeiaService,
  	private router: Router) { }

  ngOnInit() {  
    this.ideia = new Ideia(0, "", "", "", "","");	    
  } 

  cadastrar(): void {    
    if (this.formIdeia.form.valid) {    
      var isAdmin = localStorage.getItem("isAdmin");
      if (isAdmin) {
        this.ideia.situacao = "Em Execução";
      } else {
        this.ideia.situacao = "Aberta";
      }
      this.ideiaService.cadastrarNovaIdeia(this.ideia)
      .subscribe(ideia => {
        alert('ideia cadastrada com  sucesso')
        this.router.navigate(['ideias/dashboard']);
      }); 
    }   
  }
}
