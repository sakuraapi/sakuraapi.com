import {
  HttpClientTestingModule,
  HttpTestingController
}                             from '@angular/common/http/testing';
import {TestBed}              from '@angular/core/testing';
import {SharedModule}         from '../../shared/shared.module';
import {CoreModule}           from '../core.module';
import {WordpressApiService}  from '../http/wordpress-api.service';
import {listPostResponseJson} from '../models/wordpress-post.spec';
import {WordpressService}     from './wordpress.service';

describe('WordpressService', () => {
  let api: WordpressApiService;
  let request: HttpTestingController;
  let wpService: WordpressService;

  beforeEach(() => {
    TestBed
      .configureTestingModule({
        imports: [
          CoreModule,
          HttpClientTestingModule,
          SharedModule
        ]
      });

    api = TestBed.get(WordpressApiService);
    request = TestBed.get(HttpTestingController);
    wpService = TestBed.get(WordpressService);
  });

  afterEach(() => {
    request.verify();
  });

  it('getPosts', (done) => {
    wpService
      .getPosts()
      .do((results) => expect(results.length).toBe(1))
      .subscribe(done, done.fail);

    const req = request.expectOne(api.url('/posts?page=1'));
    req.flush(listPostResponseJson);
    expect(req.request.method).toBe('GET');
  });

  it('updateCounts', async (done) => {
    await wpService
      .updateCounts()
      .do((result) => {
        expect(wpService.totalPages).toBe(111);
        expect(wpService.totalPosts).toBe(777);
        expect(result.posts).toBe(777);
        expect(result.pages).toBe(111);
      })
      .subscribe(done, done.fail);

    const req = request.expectOne(api.url('/posts'));
    req.flush(listPostResponseJson, {
      headers: {
        'x-wp-total': '777',
        'x-wp-totalpages': '111'
      }
    });

    expect(req.request.method).toBe('HEAD');
  });

  it('updateCounts handles invalid headers', async (done) => {
    await wpService
      .updateCounts()
      .do(() => {
        expect(wpService.totalPages).toBe(0);
        expect(wpService.totalPosts).toBe(0);
      })
      .subscribe(done, done.fail);

    request
      .expectOne(api.url('/posts'))
      .flush(listPostResponseJson, {
        headers: {
          'x-wp-total': 'a',
          'x-wp-totalpages': 'b'
        }
      });
  });
});
