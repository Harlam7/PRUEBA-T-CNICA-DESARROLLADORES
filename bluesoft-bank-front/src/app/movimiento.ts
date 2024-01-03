export class Movimiento {
  idMovimiento: number;
  fecha: Date;
  tipo: string; // Consignación o retiro
  monto: number;

  constructor(idMovimiento: number, fecha: Date, tipo: string, monto: number) {
    this.idMovimiento = idMovimiento;
    this.fecha = fecha;
    this.tipo = tipo;
    this.monto = monto;
  }
}
