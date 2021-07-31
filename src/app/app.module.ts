import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
//nuevos modulos

import { FormsModule } from '@angular/forms';
//Modulo de rutas

//Moudulo de peticiones http
import {HttpClientModule} from "@angular/common/http";
import { SearchinPipe } from './pipes/searchin.pipe';



@NgModule({
  declarations: [
    AppComponent,
    SearchinPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
