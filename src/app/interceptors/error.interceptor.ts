import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
      catchError(err => {
        if (err.status === 401 || err.status === 403) {
          location.href = '/signin';
        } else {
          if (err.status === 601 || err.status === 404 || err.status === 400) {
            return throwError(err);
          }
        }
        return throwError(err);
      })
    );
  }
}
