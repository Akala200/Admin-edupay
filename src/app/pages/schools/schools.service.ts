import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
// tslint:disable-next-line:import-blacklist
import { Observable } from 'rxjs';
import { Schools } from './schools.model';

@Injectable()
export class MembershipService {

    constructor(private http: HttpClient) { }

    loadData(): Observable<Schools[]> {
      const url = 'http://edupay-api.azurewebsites.net/school/get-all';

      const headers = new HttpHeaders()
      .set('Access-Control-Allow-Headers', 'Content-Type')
      .set('Access-Control-Allow-Origin', '*').set('Access-Control-Allow-Headers', 'Content-Type')
      .set('Access-Control-Allow-Methods', 'GET').set('Access-Control-Allow-Methods', 'POST').set('Access-Control-Allow-Methods', 'PUT')
      .set('Access-Control-Allow-Methods', 'DELETE').set('Content-type',  'application/json; charset=utf-8')
      .set('Access-Control-Allow-Headers', 'Content-Type; Authorization; X-Requested-With').set('Access-Control-Allow-Credentials', 'true')
         // .set('Authorization', 'auth-token');
      return this.http.get<Schools[]>( url, { headers });
    }
  }

// assets/data/schools.json
