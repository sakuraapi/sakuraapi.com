import {
  HttpClientTestingModule,
  HttpTestingController
}                             from '@angular/common/http/testing';
import {TestBed}              from '@angular/core/testing';
import {orgReposResponseJson} from '../models/github-repo.spec';

import {GithubService}    from './github.service';
import {GithubApiService} from './http/github-api.service';
import {httpProviders}    from './http/http-providers';

describe('GithubService', () => {
  let api: GithubApiService;
  let ghService: GithubService;
  let request: HttpTestingController;

  beforeEach(() => {
    TestBed
      .configureTestingModule({
        imports: [
          HttpClientTestingModule
        ],
        providers: [
          httpProviders,
          GithubService
        ]
      });

    api = TestBed.get(GithubApiService);
    request = TestBed.get(HttpTestingController);
    ghService = TestBed.get(GithubService);
  });

  it('should be created', (done) => {

    ghService
      .getRepositories()
      .do((results) => {
        expect(results.length).toBe(2);
      })
      .subscribe(done, done.fail);

    request
      .expectOne(api.url('/orgs/sakuraapi/repos'))
      .flush(orgReposResponseJson);

  });
});
