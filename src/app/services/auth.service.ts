import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse} from '@angular/common/http'
import { Router } from '@angular/router';
import { Response } from '@angular/http';
// tslint:disable-next-line:import-blacklist
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthService {


  private _loginUrl = 'https://reqres.in/api/login';


  constructor(private http: HttpClient, private _router: Router) { }


  logoutUser(user) {

    this.http.get('/api/auth/logout').subscribe(
      res => {
        console.log(res);
      },
      (err: HttpErrorResponse) => {

        console.log(err.error);
        console.log(err.name);
        console.log(err.message);
        console.log(err.status);
      }
    );
    localStorage.removeItem('token');
    this. _router.navigateByUrl('/login')

  }


  loggedIn() {
    return !!localStorage.getItem('token')
  }

  getToken() {
    return localStorage.getItem('token')
  }
}
