import {
  HttpClient,
  HttpErrorResponse
}                    from '@angular/common/http';
import {Injectable}  from '@angular/core';
import {Observable}  from 'rxjs/Observable';
import {Subject}     from 'rxjs/Subject';
import {environment} from '../../../environments/environment';
import {LogService}  from '../services/log.service';
import {
  BaseApiService,
  IHttpClientOptionsRequest
}                    from './base-api';

@Injectable()
export class GithubApiService extends BaseApiService {

  _githubApiAvailable$ = new Subject<boolean>();

  get gitHubApiAvailable$(): Observable<boolean> {
    return this._githubApiAvailable$.asObservable();
  }

  constructor(private http: HttpClient,
              private log: LogService) {
    super(http, environment.api.github);
    this.debugApiCallLogger = this.log.debugApiCall.bind(log);
  }

  request(method: string, url?: string, options: IHttpClientOptionsRequest = {}): Observable<any> {

    // make sure to change observe type to response if body is requested
    // to make sure headers can be processed, then switch back if necessary before returning
    // observable (see final map below)
    const observe = (options || {} as any).observe;
    if (observe === 'body') {
      options.observe = 'response';
    }

    return super
      .request(method, url, options)
      .catch((res: HttpErrorResponse) => {
        switch (res.status) {
          case 403:
            // Sine connections to github are anonymous, a 403 indicates a rate limit issue, so
            // return an empty array and allow [[GithubService]] to deal with it
            const result = Object.assign(res, {body: []});
            return Observable.of(result);
          default:
            return Observable.throw(res);
        }
      })
      .map((resp) => {
        if ('headers' in resp) {
          const requestsRemaining = Number(resp.headers.get('X-RateLimit-Remaining')) || 0;
          this._githubApiAvailable$.next(requestsRemaining > 0);
          this.log.debug(`github requests remaining: ${requestsRemaining}`);
        }

        return (observe === 'body')
          ? resp.body
          : resp;
      });
  }
}
