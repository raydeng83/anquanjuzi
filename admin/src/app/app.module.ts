import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {routing} from './app.routing';


import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule} from '@angular/forms';

// PrimeNG Modules
import {MenubarModule} from 'primeng/menubar';
import {InputTextModule} from 'primeng/inputtext';
import {ButtonModule, CalendarModule, DropdownModule, EditorModule} from 'primeng/primeng';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import {MenubarComponent} from './components/menubar/menubar.component';
import { AddArtComponent } from './components/add-art/add-art.component';
import {ArtService} from './services/art.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenubarComponent,
    AddArtComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    routing,
    EditorModule,
    MenubarModule,
    InputTextModule,
    DropdownModule,
    ButtonModule,
    CalendarModule
  ],
  providers: [
    ArtService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
