import { Injectable } from '@angular/core';

@Injectable()
export class ConfigService {

    _apiURI: string;

    constructor() {
        this._apiURI = 'https://reqres.in/';
     }

     getApiURI() {
         return this._apiURI;
     }
}
