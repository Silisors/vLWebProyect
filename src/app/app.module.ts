import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponentComponent } from './home-component/home-component.component';
import { CardsComponent } from './cards/cards.component';
import { FooterComponent } from './footer/footer.component';
import { CarouselComponent } from './carousel/carousel.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ProjectsVlComponent } from './projects-vl/projects-vl.component';
import { Routes, RouterModule } from '@angular/router';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { BotonesPriceComponent } from './botones-price/botones-price.component';
import { FormsModule } from '@angular/forms';
import { PrimercompComponent } from './primercomp/primercomp.component';
import { Carousel1Component } from '../app/carouseles/carousel1/carousel1.component'
import { Carousel2Component } from './carouseles/carousel2/carousel2.component';
import { Carousel3Component } from './carouseles/carousel3/carousel3.component';
import { Carousel4Component } from './carouseles/carousel4/carousel4.component';
import { Carousel5Component } from './carouseles/carousel5/carousel5.component';
import { Carousel6Component } from './carouseles/carousel6/carousel6.component';
import { Carousel7Component } from './carouseles/carousel7/carousel7.component';
import { Carousel8Component } from './carouseles/carousel8/carousel8.component';
import { YardComponent2Component } from './YardComponents/yard-component2/yard-component2.component';
import { YardComponent3Component } from './YardComponents/yard-component3/yard-component3.component';
import { YardComponent4Component } from './YardComponents/yard-component4/yard-component4.component';
import { YardComponent5Component } from './YardComponents/yard-component5/yard-component5.component';
import { YardComponent6Component } from './YardComponents/yard-component6/yard-component6.component';
import { YardComponent7Component } from './YardComponents/yard-component7/yard-component7.component';
import { YardComponent8Component } from './YardComponents/yard-component8/yard-component8.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { YardCarousel1Component } from './yard-carousel/yard-carousel1/yard-carousel1.component';
import { YardCarousel2Component } from './yard-carousel/yard-carousel2/yard-carousel2.component';
import { YardCarousel3Component } from './yard-carousel/yard-carousel3/yard-carousel3.component';
import { YardCarousel4Component } from './yard-carousel4/yard-carousel4.component';
import { YardCarousel5Component } from './yard-carousel5/yard-carousel5.component';
import { YardCarousel6Component } from './yard-carousel6/yard-carousel6.component';
import { YardCarousel7Component } from './yard-carousel7/yard-carousel7.component';
import { AdminComponentComponent } from './admin-component/admin-component.component';
import { LoginAdminComponent } from './login-admin/login-admin.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { HttpClientModule } from '@angular/common/http';
import { GraphQLModule } from './graphql.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponentComponent,
    CardsComponent,
    FooterComponent,
    CarouselComponent,
    AboutUsComponent,
    ProjectsVlComponent,
    NavBarComponent,
    BotonesPriceComponent,
    PrimercompComponent,
    Carousel1Component,
    Carousel2Component,
    Carousel3Component,
    Carousel4Component,
    Carousel5Component,
    Carousel6Component,
    Carousel7Component,
    Carousel8Component,
    YardComponent2Component,
    YardComponent3Component,
    YardComponent4Component,
    YardComponent5Component,
    YardComponent6Component,
    YardComponent7Component,
    YardComponent8Component,
    ContactUsComponent,
    YardCarousel1Component,
    YardCarousel2Component,
    YardCarousel3Component,
    YardCarousel4Component,
    YardCarousel5Component,
    YardCarousel6Component,
    YardCarousel7Component,
    AdminComponentComponent,
    LoginAdminComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule,
    HttpClientModule,
    GraphQLModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
