
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
import 'rxjs/add/operator/map';


@Injectable()
export class AuthService {

    private _loginUrl = 'https://reqres.in/api/login';


    constructor(private http: HttpClient, private _router: Router) { }

    loginUser(user) {
      return this.http.post<any>(this._loginUrl, user)
    }

    loggedIn() {
      return !!localStorage.getItem('token')
    }

    logoutUser(user) {
      localStorage.removeItem('token');
      this._router.navigate(['../login']);

    }

    getToken() {
      return localStorage.getItem('token')
    }


  }
