import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http'
import { Router } from '@angular/router';
import { Response } from '@angular/http';
// tslint:disable-next-line:import-blacklist
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthService {

  private _loginUrl = 'https://reqres.in/api/login';


  constructor(private http: HttpClient, private _router: Router) { }

  loginUser(email, password) {
    // tslint:disable-next-line:prefer-const
    let data = 'email=' + email + '&password=' + password + '&grant_type=password';
    // tslint:disable-next-line:prefer-const
    let reqHeader = new HttpHeaders({ 'Content-Type': 'application/x-www-urlencoded', 'No-Auth': 'True' });
    return this.http.post(this._loginUrl + '/token', data, { headers: reqHeader });
  }

  loggedIn() {
    return !!localStorage.getItem('token')
  }

  logoutUser(user) {
    localStorage.removeItem('token');
    this. _router.navigateByUrl('/login')
  }

  getToken() {
    return localStorage.getItem('token')
  }
}
