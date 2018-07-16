import { Injectable, Injector } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HTTP_INTERCEPTORS, HttpErrorResponse,
} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { HttpHeaders} from '@angular/common/http';




@Injectable()
export class JwtInterceptor  implements HttpInterceptor {

    constructor(private injector: Injector) { }

    intercept(req, next): Observable<HttpEvent<any>> {

  return next.handle(req);

  }
  }
