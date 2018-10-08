import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './components/home/home.component';

import {Art1Component} from './components/articles/oct-2018/art1/art1.component';
import {Art2Component} from './components/articles/oct-2018/art2/art2.component';
import {SubjectsComponent} from './components/subjects/subjects.component';
import {Art3Component} from './components/articles/oct-2018/art3/art3.component';
import {OauthComponent} from './components/subjects/oauth/oauth.component';
import {Oauth1Component} from './components/subjects/oauth/oauth1/oauth1.component';
import {Oauth2Component} from './components/subjects/oauth/oauth2/oauth2.component';
import {Oauth3Component} from './components/subjects/oauth/oauth3/oauth3.component';
import {Oauth4Component} from './components/subjects/oauth/oauth4/oauth4.component';
import {Art4Component} from './components/articles/oct-2018/art4/art4.component';
import {Art5Component} from './components/articles/oct-2018/art5/art5.component';
import {ArtComponent} from './components/art/art.component';



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
  },
  {
    path: 'art1',
    component: Art1Component
  },
  {
    path: 'art2',
    component: Art2Component
  },
  {
    path: 'art3',
    component: Art3Component
  },
  {
    path: 'art4',
    component: Art4Component
  },
  {
    path: 'art5',
    component: Art5Component
  }

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes, {useHash: true});
