import { Component, OnInit, ViewChild } from '@angular/core';

import { IdeiaService, Usuario } from '../shared';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logar-ideia',
  templateUrl: './logar-ideia.component.html',
  styleUrls: ['./logar-ideia.component.css']
})
export class LogarIdeiaComponent implements OnInit {

  constructor(private ideiaService: IdeiaService, private router: Router) {}
  

  @ViewChild('formUsuario') formUsuario: NgForm;
  usuario: Usuario;
  credentials = {username: '', password: ''};
  cookieValue = 'UNKNOWN';
 
  ngOnInit(): void { }

  login() {
    this.ideiaService.authenticate(this.credentials)
      .subscribe(usuario => {        
        this.usuario = usuario,
        console.log(this.usuario.token);        
        sessionStorage['token'] = JSON.stringify(this.usuario.token);        
        //this.router.navigate(["/ideias/dashboard"])
      });
  }  
}
