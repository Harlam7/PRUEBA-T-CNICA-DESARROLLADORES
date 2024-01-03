import { Movimiento } from './movimiento';

export class ExtractoMensual {
  mes: number;
  anio: number;
  detallesMovimientos: Movimiento[];

  constructor(mes: number, anio: number, detallesMovimientos: Movimiento[]) {
    this.mes = mes;
    this.anio = anio;
    this.detallesMovimientos = detallesMovimientos;
  }
}
