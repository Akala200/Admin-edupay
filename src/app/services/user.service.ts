import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/observable';
import {User} from '../model/user.model';
import 'rxjs/add/operator/share'



@Injectable()
export class UserService {



  constructor(private http: HttpClient) { }

  loadData() {
    const url = 'assets/data/users.json'; /**http://edupay-api.azurewebsites.net/api/admin/user/get-all
    */
    return this.http.get(url);
  }


postData() {
}

}
