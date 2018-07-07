import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
// tslint:disable-next-line:import-blacklist
import { Observable } from 'rxjs';
import { School } from '../../model/school.model';

@Injectable()
export class MembershipService {
    baseUrl = 'assets/data'; /**'http://edupay-api.azurewebsites.net */
    constructor(private http: HttpClient) {

    }
    get_schools() {
        return this.http.get(this.baseUrl + '/schools.json');
    }

}
