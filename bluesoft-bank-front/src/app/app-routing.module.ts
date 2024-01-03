import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {ListaClientesComponent} from "./lista-clientes/lista-clientes.component";
import {RegistarClienteComponent} from "./registar-cliente/registar-cliente.component";
import {ActualizarClienteComponent} from "./actualizar-cliente/actualizar-cliente.component";
import {ClienteDetalleComponent} from "./cliente-detalle/cliente-detalle.component";


const routes: Routes = [
  {path : 'clientes',component:ListaClientesComponent},
  {path:'',redirectTo:'empleados',pathMatch:'full'},
  {path: 'registar-cliente', component: RegistarClienteComponent},
  {path: 'actualizar-cliente/:id', component: ActualizarClienteComponent},
  {path: 'cliente-detalles/:id', component: ClienteDetalleComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
