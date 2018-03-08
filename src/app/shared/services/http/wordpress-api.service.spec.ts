import {
  HttpClientTestingModule,
  HttpTestingController
}                            from '@angular/common/http/testing';
import {TestBed}             from '@angular/core/testing';
import {environment}         from '../../../../environments/environment';
import {httpProviders}       from './http-providers';
import {WordpressApiService} from './wordpress-api.service';

describe('WordpressApiService', () => {
  let request: HttpTestingController;
  let api: WordpressApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      providers: [
        httpProviders
      ]
    });

    api = TestBed.get(WordpressApiService);
    request = TestBed.get(HttpTestingController);
  });

  it('injects base url', (done) => {
    api
      .get('/test')
      .subscribe(done, done.fail);

    request
      .expectOne(`${environment.api.wordpress}/test`)
      .flush({});
  });
});
