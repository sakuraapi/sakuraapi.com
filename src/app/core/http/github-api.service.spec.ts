import {HttpResponse}     from '@angular/common/http';
import {
  HttpClientTestingModule,
  HttpTestingController
}                         from '@angular/common/http/testing';
import {TestBed}          from '@angular/core/testing';
import {SharedModule}     from '../../shared/shared.module';
import {CoreModule}       from '../core.module';
import {GithubApiService} from './github-api.service';
import {httpProviders}    from './http-providers';

describe('GithubApiService', () => {
  let request: HttpTestingController;
  let api: GithubApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        CoreModule,
        HttpClientTestingModule,
        SharedModule
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
      .expectOne(api.url('/test'))
      .flush({});
  });

  it('returns empty array when 403 (rate limit exceeded)', (done) => {
    api
      .get('/test', {observe: 'response'})
      .do((res: HttpResponse<any[]>) => {
        expect(Array.isArray(res.body)).toBeTruthy('Should have been an array');
        expect(res.body.length).toBe(0);

        expect(res.headers.get('X-RateLimit-Limit')).toBe('60');
        expect(res.headers.get('X-RateLimit-Remaining')).toBe('0');
        expect(res.headers.get('X-RateLimit-Reset')).toBe('0');
      })
      .subscribe(done, done.fail);

    request
      .expectOne(api.url('/test'))
      .flush([], {
        status: 403,
        statusText: 'rate limited exceeded',
        headers: {
          'X-RateLimit-Limit': '60',
          'X-RateLimit-Remaining': '0',
          'X-RateLimit-Reset': '0'
        }
      });
  });
});
