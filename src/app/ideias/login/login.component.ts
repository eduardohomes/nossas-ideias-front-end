import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService, Usuario } from '../shared';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuario: Usuario = new Usuario();

  constructor(private Auth: AuthService, 
              private router: Router) { }

  ngOnInit() {
    sessionStorage.clear();
    sessionStorage.clear();
  }

  loginUser(event) {
    event.preventDefault()
    const target = event.target
    const username = target.querySelector('#username').value
    const password = target.querySelector('#password').value
    
    this.Auth.getUserDetails(username, password).subscribe(usuario => {
      if(usuario != null) {
        this.Auth.setLoggedIn(true)
        sessionStorage['token'] = JSON.stringify(usuario['token']);        
        sessionStorage['user'] = JSON.stringify(usuario['user']);    
        this.router.navigate(["/ideias/dashboard"])
        window.location.reload();
      } else {
        window.alert("data.message")
      }
    })
    
  }

}
