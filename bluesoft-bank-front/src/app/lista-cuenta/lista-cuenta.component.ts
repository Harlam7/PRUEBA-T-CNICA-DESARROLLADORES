import { Component, OnInit } from '@angular/core';
import { CuentaService } from '../cuenta.service';


@Component({
  selector: 'app-lista-cuenta',
  standalone: true,
  imports: [],
  templateUrl: './lista-cuenta.component.html',
  styleUrl: './lista-cuenta.component.css'
})
export class ListaCuentaComponentimplements OnInit {
  saldo: number;

  constructor(private cuentaService: CuentaService) {}

  ngOnInit(): void {
    this.saldo = this.cuentaService.consultarSaldo();
  }
}
