/*
import { NgModule} from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from "./app.component";
import { ListaClientesComponent } from "./lista-clientes/lista-clientes.component";
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    ListaClientesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    AppComponent
  ],
  providers: [],
  exports: [
    ListaClientesComponent
  ],
  bootstrap: []
})
export class AppModule { }

*/

import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from "./app.component";
import { ListaClientesComponent } from "./lista-clientes/lista-clientes.component";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";
import {RouterModule} from "@angular/router";
import {routes} from "./app.routes";

@NgModule({
  declarations: [
    ListaClientesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes),
    RouterModule.forChild(routes)
  ],
  providers: [],
  //bootstrap: [AppComponent]
})
export class AppModule { }
