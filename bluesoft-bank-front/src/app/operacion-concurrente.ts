export class OperacionConcurrente {
  idOperacion: number;
  tipo: string; // Consignación o retiro
  monto: number;

  constructor(idOperacion: number, tipo: string, monto: number) {
    this.idOperacion = idOperacion;
    this.tipo = tipo;
    this.monto = monto;
  }
}
