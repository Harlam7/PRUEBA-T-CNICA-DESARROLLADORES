import { RouterModule, Routes } from '@angular/router';
import {NgModule} from "@angular/core";

const routes: Routes = [
  // tus rutas aquí
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LazyModule {}
