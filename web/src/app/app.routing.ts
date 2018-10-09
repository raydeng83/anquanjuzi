import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './components/home/home.component';

import {SubjectsComponent} from './components/subjects/subjects.component';
import {OauthComponent} from './components/subjects/oauth/oauth.component';
import {Oauth1Component} from './components/subjects/oauth/oauth1/oauth1.component';
import {Oauth2Component} from './components/subjects/oauth/oauth2/oauth2.component';
import {Oauth3Component} from './components/subjects/oauth/oauth3/oauth3.component';
import {Oauth4Component} from './components/subjects/oauth/oauth4/oauth4.component';
import {ArtComponent} from './components/art/art.component';
import {AboutComponent} from './components/about/about.component';
import {ContactComponent} from './components/contact/contact.component';



const appRoutes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'art/:id',
    component: ArtComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: 'subjects',
    component: SubjectsComponent
  },
  {
    path: 'subjects/oauth',
    component: OauthComponent
  },
  {
    path: 'subjects/oauth/art1',
    component: Oauth1Component
  },
  {
    path: 'subjects/oauth/art2',
    component: Oauth2Component
  },
  {
    path: 'subjects/oauth/art3',
    component: Oauth3Component
  },
  {
    path: 'subjects/oauth/art4',
    component: Oauth4Component
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes, {useHash: true});
