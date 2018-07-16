import { Injectable } from '@angular/core';
// tslint:disable-next-line:import-blacklist
import { Observable } from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {User} from '../model/user.model';
import 'rxjs/add/operator/share';
import { Response } from '@angular/http';




@Injectable()
export class UserService {


  constructor(private http: HttpClient) {   }



postData(user) {
  const url = 'http://edupay-api.azurewebsites.net/user/create/';

  const headers = new HttpHeaders()
  .set('Access-Control-Allow-Headers', 'Content-Type')
  .set('Access-Control-Allow-Origin', '*').set('Access-Control-Allow-Headers', 'Content-Type')
  .set('Access-Control-Allow-Methods', 'POST').set('Content-type',  'application/json; charset=utf-8')
  .set('Access-Control-Allow-Headers', 'Content-Type; Authorization; X-Requested-With').set('Access-Control-Allow-Credentials', 'true')
     // .set('Authorization', 'auth-token');
     return this.http.post( url, { headers }).map((response: Response) => {return response.json().response});
    }



delete(id: number) {
  const url = 'http://edupay-api.azurewebsites.net/api/Values/';

  const headers = new HttpHeaders()
  .set('Access-Control-Allow-Headers', 'Content-Type')
  .set('Access-Control-Allow-Origin', '*').set('Access-Control-Allow-Headers', 'Content-Type')
  .set('Access-Control-Allow-Methods', 'DELETE').set('Content-type',  'application/json; charset=utf-8')
  .set('Access-Control-Allow-Headers', 'Content-Type; Authorization; X-Requested-With').set('Access-Control-Allow-Credentials', 'true')
     // .set('Authorization', 'auth-token');
     return this.http.delete( url + id, { headers }).map((response: Response) => {return response.json().response});
    }
update(id: number) {
  const url = 'http://edupay-api.azurewebsites.net/api/Values/';

  const headers = new HttpHeaders()
  .set('Access-Control-Allow-Headers', 'Content-Type')
  .set('Access-Control-Allow-Origin', '*').set('Access-Control-Allow-Headers', 'Content-Type')
  .set('Access-Control-Allow-Methods', 'DELETE').set('Content-type',  'application/json; charset=utf-8')
  .set('Access-Control-Allow-Headers', 'Content-Type; Authorization; X-Requested-With').set('Access-Control-Allow-Credentials', 'true')
     // .set('Authorization', 'auth-token');
     return this.http.put( url + id, { headers }).map((response: Response) => {return response.json().response});
    }

}

// const url = 'http://edupay-api.azurewebsites.net/api/admin/user/get-all';
