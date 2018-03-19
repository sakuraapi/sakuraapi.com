import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {
  HttpClientTestingModule,
  HttpTestingController
}                          from '@angular/common/http/testing';
import {TestBed}           from '@angular/core/testing';
import {SharedModule}      from '../../shared/shared.module';
import {CoreModule}        from '../core.module';
import {GithubApiService}  from './github-api.service';
import {GithubInterceptor} from './github-interceptor';

describe('Github Interceptor', () => {
  let api: GithubApiService;
  let request: HttpTestingController;
  let githubInterceptor: GithubInterceptor;

  beforeEach(() => {
    TestBed
      .configureTestingModule({
        imports: [
          CoreModule,
          HttpClientTestingModule,
          SharedModule
        ]
      });

    api = TestBed.get(GithubApiService);
    request = TestBed.get(HttpTestingController);

    const interceptors = TestBed.get(HTTP_INTERCEPTORS);
    for (const interceptor of interceptors) {
      if (interceptor instanceof GithubInterceptor) {
        githubInterceptor = interceptor;
      }
    }
  });

  afterEach(() => request.verify());

  it('should be called', (done) => {

    spyOn(githubInterceptor, 'intercept').and.callThrough();

    api
      .get('/test')
      .subscribe(() => {
        expect(githubInterceptor.intercept).toHaveBeenCalledTimes(1);
        done();
      }, done.fail);

    request
      .expectOne(api.url('/test'))
      .flush({});
  });
});
