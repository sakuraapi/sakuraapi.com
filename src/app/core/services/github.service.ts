import {Injectable}       from '@angular/core';
import {Observable}       from 'rxjs/Observable';
import {GithubApiService} from '../http/github-api.service';
import {GithubRepo}       from '../models/github-repo';
import {BrowserService}   from './browser.service';
import {LogService}       from './log.service';

const cacheOptions = {
  repoCacheLife: 1000 * 60 * 60, // 60 min
  repoRetryInterval: 1000 * 2,   // 2 seconds
  repoReties: 5
};

@Injectable()
export class GithubService {

  private repoCache$: Observable<GithubRepo[]>;

  constructor(private api: GithubApiService,
              private browser: BrowserService,
              private log: LogService) {
  }

  /**
   * Gets a list of repositories for the organization. These are cached by the service worker (if present)
   * or in memory. Up to 5 attempts will be made to retrieve the list if there's a failure outher than
   * a rate limit failure (403).
   * @returns {Observable<GithubRepo[]>}
   */
  getRepositories(): Observable<GithubRepo[]> {

    if (!this.repoCache$) {
      this.log.debug('repoCache$ miss');

      this
        .repoCache$ = Observable
        .defer(() => {
          if (!this.browser.hasServiceWorker && this.browser.hasCache) {
            // probably running in non-production mode
          }

          // return Observable.of([]);
          return this
            .api
            .get('/orgs/sakuraapi/repos', {observe: 'response'})
            .map((resp) => resp.body)
            .map(GithubRepo.fromJsonArray);
        })
        .retryWhen((err$) => {
          return err$
            .do((err) => {
              if (err.statusCode !== 403) {
                throw err;
              }
            })
            .delay(cacheOptions.repoRetryInterval)
            .take(5);
        })
        .publishReplay(1, cacheOptions.repoCacheLife)
        .refCount()
        .take(1);
    }

    return this.repoCache$;
  }
}
