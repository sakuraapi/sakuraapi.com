import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest
}                    from '@angular/common/http';
import {Observable}  from 'rxjs/Observable';
import {environment} from '../../../environments/environment';

const baseUrl = (environment.api || {} as any).github || 'undefined';

export class GithubInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (!req.url.startsWith(baseUrl)) {
      return next.handle(req);
    }

    return next.handle(req);
  }
}
