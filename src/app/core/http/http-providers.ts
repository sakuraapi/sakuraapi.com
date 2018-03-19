import {
  HTTP_INTERCEPTORS,
  HttpClient
}                             from '@angular/common/http';
import {GithubApiService}     from './github-api.service';
import {GithubInterceptor}    from './github-interceptor';
import {WordpressApiService}  from './wordpress-api.service';
import {WordpressInterceptor} from './wordpress-interceptor';

export const httpProviders = [
  {provide: HTTP_INTERCEPTORS, useClass: GithubInterceptor, multi: true},
  {provide: HTTP_INTERCEPTORS, useClass: WordpressInterceptor, multi: true},
  GithubApiService,
  HttpClient,
  WordpressApiService
];
