import {CommonModule}            from '@angular/common';
import {NgModule}                from '@angular/core';
import {MatCardModule}           from '@angular/material';
import {StorageModule}           from '../core/services/storage.service';
import {FeatureCardStateService} from './components/feature-card/feature-card-state.service';
import {FeatureCardComponent}    from './components/feature-card/feature-card.component';
import {FooterComponent}         from './components/footer/footer.component';
import {HeaderComponent}         from './components/header/header.component';
import {HeroImageComponent}      from './components/hero-image/hero-image.component';
import {LogoComponent}           from './components/logo/logo.component';
import {MenuComponent}           from './components/menu/menu.component';
import {ProjectsCardsComponent}  from './components/projects-cards/projects-cards.component';
import {TaglineBannerComponent}  from './components/tagline-banner/tagline-banner.component';

@NgModule({
  imports: [
    CommonModule,
    MatCardModule,
    StorageModule
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
    FeatureCardStateService
  ]
})
export class SharedModule {
}
