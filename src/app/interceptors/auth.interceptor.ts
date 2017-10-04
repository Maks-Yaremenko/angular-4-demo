import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    const token: any = localStorage.getItem('auth-token');

    if (token) {

      req = req.clone({
        headers: req.headers.set('Authorization', token)
      });

    }

    return next.handle(req);
  }
}
