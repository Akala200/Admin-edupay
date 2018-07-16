import { Injectable} from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpResponse,
  HttpErrorResponse,
  HttpHandler,
  HttpEvent
} from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';


@Injectable()
export class HttpsRequestInterceptor implements HttpInterceptor {
  intercept( request: HttpRequest<any>, next: HttpHandler ): Observable<HttpEvent<any>> {
    const customReq = request.clone({
      headers: request.headers.set('Access-Control-Allow-Headers', 'Content-Type')
      .set('Access-Control-Allow-Origin', '*')
      .set('Access-Control-Allow-Methods', 'GET').set('Access-Control-Allow-Methods', 'POST').set('Access-Control-Allow-Methods', 'PUT')
      .set('Access-Control-Allow-Methods', 'DELETE').set('Content-type',  'application/json; charset=utf-8')
      .set('Access-Control-Allow-Headers', 'Content-Type; Authorization; X-Requested-With').set('Access-Control-Allow-Credentials', 'true')
    });

    return next
    .handle(customReq)
    .do((ev: HttpEvent<any>) => {
      if (ev instanceof HttpResponse) {
        console.log('processing response', ev);
      }
    }).catch(response => {
      if (response instanceof HttpErrorResponse) {
        console.log('Processing http error', response);
      }

      return Observable.throw(response);
    });

  }
}

export class InterceptorModule { }
