import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Usuario } from './usuario.model';

@Injectable()
export class AuthService {

  private loggedInStatus = false
  private urlLogin = "http://localhost:8080/api/login";      

  constructor(private http: HttpClient) { }

  setLoggedIn(value: boolean) {
    this.loggedInStatus = value
  }

  get isLoggedIn() {
    return this.loggedInStatus
  }

  getUserDetails(username, password) {
    // post these details to API server return user info if correct
    return this.http.post(this.urlLogin, {
      username,
      password
    })
  }

}
