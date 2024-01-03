
import { Component } from '@angular/core';
import {AppModule} from "./app.module";
import {RouterOutlet} from "@angular/router";

@Component({
  //app-root
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [
    AppModule,
    RouterOutlet
  ],
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Sistema para clientes';
}

