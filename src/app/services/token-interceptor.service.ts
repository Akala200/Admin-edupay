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
                    // tslint:disable-next-line:max-line-length
                    'Bearer ' + currentUser).set('Access-Control-Allow-Origin', '*, http://edupay-api.azurewebsites.net').set('Access-Control-Allow-Headers', 'Content-Type')
                    .set('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, DELETE, PUT').set('Content-type',  'application/json')
                    .set('Access-Control-Allow-Credentials', 'true')
                    // tslint:disable-next-line:max-line-length
                    .set('Access-Control-Allow-Headers', 'X-Requested-With, Content-Type, Origin, Authorization, Accept, Client-Security-Token, Accept-Encoding')

            });

            return next.handle(cloned);
        } else {
            return next.handle(request);
        }
    }
}

