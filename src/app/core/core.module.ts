import {NgModule}               from '@angular/core';
import {httpProviders}          from './http/http-providers';
import {BrowserService}         from './services/browser.service';
import {GithubService}          from './services/github.service';
import {GoogleAnalyticsService} from './services/google-analytics.service';
import {LogService}             from './services/log.service';
import {WordpressService}       from './services/wordpress.service';

@NgModule({
  providers: [
    BrowserService,
    GithubService,
    GoogleAnalyticsService,
    httpProviders,
    LogService,
    WordpressService
  ]
})
export class CoreModule {
}
