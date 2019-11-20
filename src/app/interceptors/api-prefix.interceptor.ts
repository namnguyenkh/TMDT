import { HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable()
export class ApiPrefixInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler) {
    if (!/^(http|https):/i.test(req.url)) {
      req = req.clone({
        withCredentials: true,
        url: environment.serverUrl + req.url
      });
    }
    return next.handle(req);
  }
}
