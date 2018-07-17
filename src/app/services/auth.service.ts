import { Injectable } from '@angular/core';
import {  HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'
import { User } from '../model/user.model';
import * as moment from 'moment';


@Injectable()
export class AuthService {
    constructor(private http: HttpClient) { }

    login(email: string, password: string ) {

      const headers = new HttpHeaders()
      .set('Access-Control-Allow-Origin', '*');


      return this.http.post<User>('http://edupay-api.azurewebsites.net/login', {email, password, headers})
          .do(res => this.setSession)
          .shareReplay();
    }

       // .set('Authorization', 'auth-token');

    private setSession(authResult) {
      const expiresAt = moment().add(authResult.expiresIn, 'second');

      localStorage.setItem('currentUser', authResult.idToken);
      localStorage.setItem('expires_at', JSON.stringify(expiresAt.valueOf()) );
    }



    logoutUser(user) {
      localStorage.removeItem('currentUser');
      localStorage.removeItem('expires_at');
      return this.http.post<User>('http://edupay-api.azurewebsites.net/logoff', {user})

    }

    public isLoggedIn() {
      return moment().isBefore(this.getExpiration());
    }

    isLoggedOut() {
      return !this.isLoggedIn();
    }

    getExpiration() {
      const expiration = localStorage.getItem('expires_at');
      const expiresAt = JSON.parse(expiration);
      return moment(expiresAt);
    }
    }
