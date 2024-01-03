import {Component, OnInit} from '@angular/core';
import { TransaccionService } from '../transaccion.service';
import {subscribe} from "node:diagnostics_channel";

@Component({
  selector: 'app-consultar-movimiento',
  standalone: true,
  imports: [],
  templateUrl: './consultar-movimiento.component.html',
  styleUrl: './consultar-movimiento.component.css'
})
export class ConsultarMovimientoComponent implements OnInit {

  cuentaId: number;
  cantidadMovimientos: number = 10;

  movimientos: any[];

  constructor(private transaccionService: TransaccionService) { }

  ngOnInit(): void {
    this.cargarMovimientos();
  }

  cargarMovimientos() {
    this.transaccionService.consultarMovimientosRecientes(this.cuentaId, this.cantidadMovimientos)
      .subscribe(
        (movimientos: any) => this.movimientos = movimientos,
        (error: any) => console.log(error)
      );
  }

}
