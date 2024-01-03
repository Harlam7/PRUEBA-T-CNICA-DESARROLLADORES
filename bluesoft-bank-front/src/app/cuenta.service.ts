import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CuentaService {
  private saldo: number = 0;
  private movimientos: string[] = [];
  private extractos: string[] = [];

  consignar(cantidad: number): void {
    this.saldo += cantidad;
    this.movimientos.push(`Consignación de ${cantidad}`);
  }

  retirar(cantidad: number): void {
    if (this.saldo - cantidad >= 0) {
      this.saldo -= cantidad;
      this.movimientos.push(`Retiro de ${cantidad}`);
    } else {
      console.error('Saldo insuficiente');
    }
  }

  consultarSaldo(): number {
    return this.saldo;
  }

  obtenerMovimientosRecientes(): string[] {
    return this.movimientos.slice(-5); // Obtener los últimos 5 movimientos
  }

  generarExtractoMensual(): string[] {
    const fechaActual = new Date();
    const mesActual = fechaActual.getMonth() + 1; // Se suma 1 porque los meses en JavaScript van de 0 a 11
    const movimientosMensuales = this.movimientos.filter(movimiento => {
      const fechaMovimiento = new Date(movimiento.fecha);
      return fechaMovimiento.getMonth() + 1 === mesActual;
    });

    // Encabezado del extracto
    const extracto = [`----- Extracto Mensual - ${fechaActual.toLocaleDateString()} -----`];

    // Detalles de los movimientos mensuales
    for (const movimiento of movimientosMensuales) {
      extracto.push(`${movimiento.fecha.toLocaleDateString()} - ${movimiento.descripcion}`);
    }

    // Saldo al principio y al final del mes
    const saldoInicioMes = this.calcularSaldoInicioMes();
    const saldoFinMes = this.saldo;

    extracto.push(`Saldo al inicio del mes: ${saldoInicioMes}`);
    extracto.push(`Saldo al final del mes: ${saldoFinMes}`);

    // Separador
    extracto.push('-----------------------------------------------------');

    // Agregar al registro de extractos
    this.extractos.push(...extracto);

    return extracto;
  }

  private calcularSaldoInicioMes(): number {
    const fechaActual = new Date();
    const mesActual = fechaActual.getMonth() + 1;

    const movimientosAnterioresAlMes = this.movimientos.filter(movimiento => {
      const fechaMovimiento = new Date(movimiento.fecha);
      return fechaMovimiento.getMonth() + 1 < mesActual;
    });

    return movimientosAnterioresAlMes.reduce((saldo, movimiento) => {
      return saldo + movimiento.cantidad;
    }, 0);
  }
}
