import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {FormsModule,ReactiveFormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { MiddleComponent } from './middle/middle.component';
import { CardComponent } from './card/card.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    MiddleComponent,
    CardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
