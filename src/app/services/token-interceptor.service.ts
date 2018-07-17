import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // add authorization header with jwt token if available
        const currentUser = localStorage.getItem('currentUser');

        if (currentUser) {
            const cloned = request.clone({
                headers: request.headers.set('Authorization',
                    'Bearer ' + currentUser)
            });

            return next.handle(cloned);
        } else {
            return next.handle(request);
        }
    }
}

