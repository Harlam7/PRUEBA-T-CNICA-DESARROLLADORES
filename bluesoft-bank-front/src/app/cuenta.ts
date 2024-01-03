import { Cliente } from './cliente';
import { Movimiento } from './movimiento';

export class Cuenta {
  idCuenta: number;
  cliente: Cliente;
  tipoCuenta: string;
  saldo: number;
  movimientos: Movimiento[];

  constructor(idCuenta: number, cliente: Cliente, tipoCuenta: string) {
    this.idCuenta = idCuenta;
    this.cliente = cliente;
    this.tipoCuenta = tipoCuenta;
    this.saldo = 0;
    this.movimientos = [];
  }
}
