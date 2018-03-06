import {CommonModule}           from '@angular/common';
import {NgModule}               from '@angular/core';
import {FooterComponent}        from './footer/footer.component';
import {HeaderComponent}        from './header/header.component';
import {HeroImageComponent}     from './hero-image/hero-image.component';
import {LogoComponent}          from './logo/logo.component';
import {MenuComponent}          from './menu/menu.component';
import {TaglineBannerComponent} from './tagline-banner/tagline-banner.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    HeaderComponent,
    HeroImageComponent,
    LogoComponent,
    MenuComponent,
    TaglineBannerComponent,
    FooterComponent
  ],
  exports: [
    HeaderComponent,
    HeroImageComponent,
    LogoComponent,
    MenuComponent,
    TaglineBannerComponent,
    FooterComponent
  ]
})
export class ComponentsModule {
}
