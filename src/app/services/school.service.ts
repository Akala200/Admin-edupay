import { Injectable } from '@angular/core';
// tslint:disable-next-line:import-blacklist
import { Observable } from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {School} from '../model/school.model'

@Injectable()
export class SchoolService {

  constructor(private http: HttpClient) { }

  loadData() {
    const url = 'assets/data/users.json'; /**http://edupay-api.azurewebsites.net/school/get-all
    */
    return this.http.get(url);
  }

}
