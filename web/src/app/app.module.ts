import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {routing} from './app.routing';
import {NgxPaginationModule} from 'ngx-pagination';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import {ArtService} from './services/art.service';


import { Art1Component } from './components/articles/oct-2018/art1/art1.component';
import { StringFilterPipe } from './pipes/string-filter.pipe';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import {FormsModule} from '@angular/forms';
import { Art2Component } from './components/articles/oct-2018/art2/art2.component';
import { TitleBarComponent } from './components/title-bar/title-bar.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { SubjectsComponent } from './components/subjects/subjects.component';
import { Art3Component } from './components/articles/oct-2018/art3/art3.component';
import { FooterComponent } from './components/footer/footer.component';
import { Oauth1Component } from './components/subjects/oauth/oauth1/oauth1.component';
import { OauthComponent } from './components/subjects/oauth/oauth.component';
import { Oauth2Component } from './components/subjects/oauth/oauth2/oauth2.component';
import { Oauth3Component } from './components/subjects/oauth/oauth3/oauth3.component';
import { Oauth4Component } from './components/subjects/oauth/oauth4/oauth4.component';
import { Art4Component } from './components/articles/oct-2018/art4/art4.component';
import { Art5Component } from './components/articles/oct-2018/art5/art5.component';
import { ArtRankingComponent } from './components/art-ranking/art-ranking.component';
import {HttpClientModule} from '@angular/common/http';
import { ArtComponent } from './components/art/art.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    Art1Component,
    StringFilterPipe,
    NavBarComponent,
    Art2Component,
    TitleBarComponent,
    SubjectsComponent,
    Art3Component,
    FooterComponent,
    Oauth1Component,
    OauthComponent,
    Oauth2Component,
    Oauth3Component,
    Oauth4Component,
    Art4Component,
    Art5Component,
    ArtRankingComponent,
    ArtComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NgxPaginationModule,
    FormsModule,
    routing,
    HttpClientModule,

  ],
  providers: [
    ArtService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
