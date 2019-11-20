import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpRequest, HttpResponse } from '@angular/common/http';
import { finalize, tap } from 'rxjs/operators';
import { NGXLogger } from 'ngx-logger';
import { environment } from '../../environments/environment';

@Injectable()
export class LoggingInterceptor implements HttpInterceptor {
  constructor(private readonly logger: NGXLogger) {}
  intercept(req: HttpRequest<any>, next: HttpHandler) {
    const started = Date.now();
    let ok: string;
    if (!environment.production) {
      return next.handle(req).pipe(
        tap(
          event => {
            ok = event instanceof HttpResponse ? 'succeeded' : '';
          },
          error => {
            ok = 'failed';
          }
        ),
        finalize(() => {
          const elapsed = Date.now() - started;
          const msg = `${req.method} "${req.urlWithParams}"
                   ${ok} in ${elapsed} ms.`;
          this.logger.log(msg);
        })
      );
    }
    return next.handle(req);
  }
}
