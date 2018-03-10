import {CommonModule}            from '@angular/common';
import {NgModule}                from '@angular/core';
import {MatCardModule}           from '@angular/material';
import {FeatureCardStateService} from './components/feature-card/feature-card-state.service';
import {FeatureCardComponent}    from './components/feature-card/feature-card.component';
import {FooterComponent}         from './components/footer/footer.component';
import {HeaderComponent}         from './components/header/header.component';
import {HeroImageComponent}      from './components/hero-image/hero-image.component';
import {LogoComponent}           from './components/logo/logo.component';
import {MenuComponent}           from './components/menu/menu.component';
import {ProjectsCardsComponent}  from './components/projects-cards/projects-cards.component';
import {TaglineBannerComponent}  from './components/tagline-banner/tagline-banner.component';
import {GithubService}           from './services/github.service';
import {GoogleAnalyticsService}  from './services/google-analytics.service';
import {httpProviders}           from './services/http/http-providers';
import {LogService}              from './services/log.service';
import {WordpressService}        from './services/wordpress.service';

@NgModule({
  imports: [
    CommonModule,
    MatCardModule
  ],
  declarations: [
    FeatureCardComponent,
    FooterComponent,
    HeaderComponent,
    HeroImageComponent,
    LogoComponent,
    MenuComponent,
    ProjectsCardsComponent,
    TaglineBannerComponent
  ],
  exports: [
    FeatureCardComponent,
    FooterComponent,
    HeaderComponent,
    HeroImageComponent,
    LogoComponent,
    MatCardModule,
    MenuComponent,
    ProjectsCardsComponent,
    TaglineBannerComponent
  ],
  providers: [
    FeatureCardStateService,
    httpProviders,
    GithubService,
    GoogleAnalyticsService,
    LogService,
    WordpressService
  ]
})
export class SharedModule {
}
