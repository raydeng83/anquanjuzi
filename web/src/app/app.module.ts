import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {routing} from './app.routing';
import {NgxPaginationModule} from 'ngx-pagination';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import {ArtService} from './services/art.service';


import { StringFilterPipe } from './pipes/string-filter.pipe';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import {FormsModule} from '@angular/forms';
import { TitleBarComponent } from './components/title-bar/title-bar.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { SubjectsComponent } from './components/subjects/subjects.component';
import { FooterComponent } from './components/footer/footer.component';
import { Oauth1Component } from './components/subjects/oauth/oauth1/oauth1.component';
import { OauthComponent } from './components/subjects/oauth/oauth.component';
import { Oauth2Component } from './components/subjects/oauth/oauth2/oauth2.component';
import { Oauth3Component } from './components/subjects/oauth/oauth3/oauth3.component';
import { Oauth4Component } from './components/subjects/oauth/oauth4/oauth4.component';
import { ArtRankingComponent } from './components/art-ranking/art-ranking.component';
import {HttpClientModule} from '@angular/common/http';
import { ArtComponent } from './components/art/art.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    StringFilterPipe,
    NavBarComponent,
    TitleBarComponent,
    SubjectsComponent,
    FooterComponent,
    Oauth1Component,
    OauthComponent,
    Oauth2Component,
    Oauth3Component,
    Oauth4Component,
    ArtRankingComponent,
    ArtComponent,
    AboutComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NgxPaginationModule,
    FormsModule,
    routing,
    HttpClientModule
  ],
  providers: [
    ArtService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
