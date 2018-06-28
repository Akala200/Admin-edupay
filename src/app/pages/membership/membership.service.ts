import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { School } from '../../model/school.model';

@Injectable()
export class MembershipService {
    baseUrl = 'http://edupay-api.azurewebsites.net';

    constructor(private http: HttpClient) {

    }
    get_schools() {
        return this.http.get(this.baseUrl + '/school/get-all');
    }

}
