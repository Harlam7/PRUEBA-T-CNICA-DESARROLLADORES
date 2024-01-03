

import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from "./app.component";
import { ListaClientesComponent } from "./lista-clientes/lista-clientes.component";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";
import {RouterModule} from "@angular/router";
//import {routes} from "./app.routes";
import {routes} from "./app-routing.module";
import {CommonModule} from "@angular/common";

@NgModule({
  declarations: [
    ListaClientesComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  //bootstrap: [AppComponent]
})
export class AppModule { }
