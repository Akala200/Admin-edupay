import { Injectable, Injector } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpEvent } from '@angular/common/http';
import { AuthService } from './auth.service'
import { HttpRequest } from 'selenium-webdriver/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class TokenInterceptorService implements HttpInterceptor {

  constructor(private injector: Injector) { }

  intercept(req, next): Observable<HttpEvent<any>> {

const idToken = localStorage.getItem('id_token');

if (idToken) {
  const cloned = req.clone({
      headers: req.headers.set('Authorization',
          'Bearer ' + idToken)
  });

  return next.handle(cloned);
} else {
  return next.handle(req);
}
}
}

