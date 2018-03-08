import {
  HttpClientTestingModule,
  HttpTestingController
}                    from '@angular/common/http/testing';
import {TestBed}     from '@angular/core/testing';
import {environment} from '../../../../environments/environment';

import {GithubApiService} from './github-api.service';
import {httpProviders}    from './http-providers';

describe('GithubApiService', () => {
  let request: HttpTestingController;
  let api: GithubApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      providers: [
        httpProviders
      ]
    });

    api = TestBed.get(GithubApiService);
    request = TestBed.get(HttpTestingController);
  });

  it('injects base url', (done) => {
    api
      .get('/test')
      .subscribe(done, done.fail);

    request
      .expectOne(`${environment.api.github}/test`)
      .flush({});
  });
});
