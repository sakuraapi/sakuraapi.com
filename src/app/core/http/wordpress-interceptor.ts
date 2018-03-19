import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest
}                    from '@angular/common/http';
import {Injectable}  from '@angular/core';
import {Observable}  from 'rxjs/Observable';
import {environment} from '../../../environments/environment';

const baseUrl = (environment.api || {} as any).wordpress || 'undefined';

@Injectable()
export class WordpressInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (!req.url.startsWith(baseUrl)) {
      return next.handle(req);
    }

    return next.handle(req);
  }
}
