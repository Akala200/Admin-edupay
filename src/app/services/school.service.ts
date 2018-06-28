import { Injectable } from '@angular/core';
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
