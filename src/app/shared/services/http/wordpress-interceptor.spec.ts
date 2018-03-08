import {HTTP_INTERCEPTORS}    from '@angular/common/http';
import {
  HttpClientTestingModule,
  HttpTestingController
}                             from '@angular/common/http/testing';
import {TestBed}              from '@angular/core/testing';
import {httpProviders}        from './http-providers';
import {WordpressApiService}  from './wordpress-api.service';
import {WordpressInterceptor} from './wordpress-interceptor';

describe('Wordpress Interceptor', () => {
  let api: WordpressApiService;
  let request: HttpTestingController;
  let wpInterceptor: WordpressInterceptor;

  beforeEach(() => {
    TestBed
      .configureTestingModule({
        imports: [
          HttpClientTestingModule
        ],
        providers: [
          httpProviders
        ]
      });

    api = TestBed.get(WordpressApiService);
    request = TestBed.get(HttpTestingController);

    const interceptors = TestBed.get(HTTP_INTERCEPTORS);
    for (const interceptor of interceptors) {
      if (interceptor instanceof WordpressInterceptor) {
        wpInterceptor = interceptor;
      }
    }
  });

  afterEach(() => request.verify());

  it('should be called', (done) => {

    spyOn(wpInterceptor, 'intercept').and.callThrough();

    api
      .get('/test')
      .subscribe(() => {
        expect(wpInterceptor.intercept).toHaveBeenCalledTimes(1);
        done();
      }, done.fail);

    request
      .expectOne(api.url('/test'))
      .flush({});
  });
});
