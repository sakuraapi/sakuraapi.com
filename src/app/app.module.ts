import {HttpClientModule}        from '@angular/common/http';
import {NgModule}                from '@angular/core';
import {BrowserModule}           from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ServiceWorkerModule}     from '@angular/service-worker';
import {environment}             from '../environments/environment';
import {AppRoutingModule}        from './app-routing.module';
import {AppComponent}            from './app.component';
import {CoreModule}              from './core/core.module';
import {HomeModule}              from './home/home.module';
import {PageNotFoundComponent}   from './page-not-found/page-not-found.component';
import './rxjs-imports';
import {SharedModule}            from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule.withServerTransition({appId: 'serverApp'}),
    BrowserAnimationsModule,
    CoreModule,
    SharedModule,
    HomeModule,
    HttpClientModule,
    ServiceWorkerModule.register('/ngsw-worker.js', {enabled: environment.production}),
    // leave AppRoutingModule last, or submodule routing won't work
    AppRoutingModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
