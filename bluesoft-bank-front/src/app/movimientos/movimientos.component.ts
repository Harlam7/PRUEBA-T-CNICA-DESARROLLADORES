import { Component, OnInit } from '@angular/core';
import { CuentaService } from '../cuenta.service';

@Component({
  selector: 'app-movimientos',
  standalone: true,
  imports: [],
  templateUrl: './movimientos.component.html',
  styleUrl: './movimientos.component.css'
})
export class MovimientosComponent implements OnInit {
  movimientos: string[];

  constructor(private cuentaService: CuentaService) {}

  ngOnInit(): void {
    this.movimientos = this.cuentaService.obtenerMovimientosRecientes();
  }
}
