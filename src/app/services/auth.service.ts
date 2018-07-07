
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
import 'rxjs/add/operator/map';


@Injectable()
export class AuthenticationService {

  private _loginUrl = 'https://reqres.in';

    constructor(private http: HttpClient) { }

    login(email: string, password: string, rememberMe: boolean) {
        return this.http.post<any>( this._loginUrl + '/api/login', { email: email, password: password, rememberMe: rememberMe })
            .map(user => {
                // login successful if there's a jwt token in the response
                if (user && user.token) {
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('currentUser', JSON.stringify(user));
                }

                return user;
            });
    }

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
    }
}

