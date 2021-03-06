import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// tslint:disable-next-line:import-blacklist
import { Observable } from 'rxjs';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import {  Response } from '@angular/http';
import 'rxjs/add/operator/map';
import {User} from '../model/user.model'
import { id } from '@swimlane/ngx-datatable/release/utils';

@Injectable()
export class CreateService {
  readonly rootUrl = 'http://edupay-api.azurewebsites.net';
  constructor(private http: HttpClient) { }

  registerUser(user: User) {
    const body: User = {
      firstName: user.firstName,
      lastName: user.firstName,
      email: user.email,
      phoneNumber: user.phoneNumber,
      gender: user.gender,
      rolename: user.rolename,
      password: user.password,
      id: user.id
    }
    return this.http.post(this.rootUrl + '/user/create', body);
  }
}
