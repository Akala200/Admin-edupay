import { Injectable } from '@angular/core';
// tslint:disable-next-line:import-blacklist
import { Observable } from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {User} from '../model/user.model';
import 'rxjs/add/operator/share'



@Injectable()
export class UserService {



  constructor(private http: HttpClient) { }

  loadData() {
    const url = 'http://edupay-api.azurewebsites.net/api/admin/user/get-all';
    return this.http.get(url);
  }


postData() {
}

}
