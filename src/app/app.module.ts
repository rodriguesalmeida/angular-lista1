import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Exerc4Component } from './page/exerc4/exerc4.component';
import { Exerc5Component } from './page/exerc5/exerc5.component';
import { Exerc6Component } from './page/exerc6/exerc6.component';
import { Exerc7Component } from './page/exerc7/exerc7.component';

@NgModule({
  declarations: [
    AppComponent,
    Exerc4Component,
    Exerc5Component,
    Exerc6Component,
    Exerc7Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
