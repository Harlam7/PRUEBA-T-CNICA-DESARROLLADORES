import { Component, OnInit } from '@angular/core';
import { CuentaService } from '../cuenta.service';

@Component({
  selector: 'app-consultar-saldo',
  standalone: true,
  imports: [],
  templateUrl: './consultar-saldo.component.html',
  styleUrl: './consultar-saldo.component.css'
})
export class ConsultarSaldoComponent implements OnInit {

  cuentaId: number;
  saldo: number;

  constructor(private cuentaService: CuentaService) { }

  ngOnInit(): void {
    this.cargarSaldo();
  }

  cargarSaldo() {
    this.cuentaService.consultarSaldo(this.cuentaId).subscribe(
      saldo => this.saldo = saldo,
      error => console.error(error)
    );
  }
}
