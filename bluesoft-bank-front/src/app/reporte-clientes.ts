import { Cliente } from './cliente';

export class ReporteClientes {
  clientes: Cliente[];
  mes: number;
  anio: number;

  constructor(clientes: Cliente[], mes: number, anio: number) {
    this.clientes = clientes;
    this.mes = mes;
    this.anio = anio;
  }
}
