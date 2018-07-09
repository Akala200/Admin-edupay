import { Injectable, Injector } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class JwtInterceptor  implements HttpInterceptor {

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
