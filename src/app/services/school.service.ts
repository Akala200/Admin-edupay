import { Injectable } from '@angular/core';
// tslint:disable-next-line:import-blacklist
import { Observable } from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {School} from '../model/school.model'

@Injectable()
export class SchoolService {

  constructor(private http: HttpClient) { }

  loadData(): Observable<Account[]> {
    const url = 'assets/data/users.json';

    const headers = new HttpHeaders()
        .set('Access-Control-Allow-Headers', 'Content-Type')
        .set('Access-Control-Allow-Origin', '*')
        .set('Access-Control-Allow-Methods', 'GET');
       // .set('Authorization', 'auth-token');
    return this.http.get<Account[]>( url, { headers });
  }
}

// /**http://edupay-api.azurewebsites.net/school/get-all*
