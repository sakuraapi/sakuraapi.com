import {
  HttpClientTestingModule,
  HttpTestingController
}                             from '@angular/common/http/testing';
import {TestBed}              from '@angular/core/testing';
import {MockSwProvider}       from '../../app.component.spec';
import {SharedModule}         from '../../shared/shared.module';
import {CoreModule}           from '../core.module';
import {GithubApiService}     from '../http/github-api.service';
import {orgReposResponseJson} from '../models/github-repo.spec';
import {GithubService}        from './github.service';

describe('GithubService', () => {
  let api: GithubApiService;
  let ghService: GithubService;
  let request: HttpTestingController;

  beforeEach(() => {
    TestBed
      .configureTestingModule({
        imports: [
          CoreModule,
          HttpClientTestingModule,
          SharedModule
        ],
        providers: [
          MockSwProvider
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
