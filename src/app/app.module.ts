import {NgModule}                from '@angular/core';
import {BrowserModule}           from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ServiceWorkerModule}     from '@angular/service-worker';
import {environment}             from '../environments/environment';
import {AppRoutingModule}        from './app-routing.module';
import {AppComponent}            from './app.component';
import {HeaderComponent}         from './shared/components/header/header.component';
import {HeroImageComponent}      from './shared/components/hero-image/hero-image.component';
import {LogoComponent}           from './shared/components/logo/logo.component';
import { TaglineBannerComponent } from './shared/components/tagline-banner/tagline-banner.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroImageComponent,
    LogoComponent,
    HeaderComponent,
    TaglineBannerComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ServiceWorkerModule.register('/ngsw-worker.js', {enabled: environment.production}),
    AppRoutingModule // keep last
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
