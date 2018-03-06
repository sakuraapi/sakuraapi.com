import {NgModule}                from '@angular/core';
import {BrowserModule}           from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ServiceWorkerModule}     from '@angular/service-worker';
import {environment}             from '../environments/environment';
import {AppRoutingModule}        from './app-routing.module';
import {AppComponent}            from './app.component';
import {HomeModule}              from './home/home.module';
import {PageNotFoundComponent}   from './page-not-found/page-not-found.component';
import {ComponentsModule}        from './shared/components/components.module';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule.withServerTransition({appId: 'serverApp'}),
    BrowserAnimationsModule,
    ComponentsModule,
    HomeModule,
    ServiceWorkerModule.register('/ngsw-worker.js', {enabled: environment.production}),
    AppRoutingModule // leave last, or module routing won't work
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
