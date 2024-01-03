import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {ListaClientesComponent} from "./lista-clientes/lista-clientes.component";
import {RegistarClienteComponent} from "./registar-cliente/registar-cliente.component";
import {ActualizarClienteComponent} from "./actualizar-cliente/actualizar-cliente.component";
import {ClienteDetalleComponent} from "./cliente-detalle/cliente-detalle.component";
import {ConsultarSaldoComponent} from "./consultar-saldo/consultar-saldo.component";
import {ConsultarMovimientoComponent} from "./consultar-movimiento/consultar-movimiento.component";
import {GenerarExtractoComponent} from "./generar-extracto/generar-extracto.component";


const routes: Routes = [
  {path : 'clientes',component:ListaClientesComponent},
  {path:'',redirectTo:'empleados',pathMatch:'full'},
  {path: 'registar-cliente', component: RegistarClienteComponent},
  {path: 'actualizar-cliente/:id', component: ActualizarClienteComponent},
  {path: 'cliente-detalles/:id', component: ClienteDetalleComponent},
  {path: 'consultar-saldo/:id', component: ConsultarSaldoComponent},
  {path: 'consultar-movimiento/:id', component: ConsultarMovimientoComponent},
  {path: 'generar-extracto/:id', component: GenerarExtractoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export { routes };
