import { Component, OnInit } from '@angular/core';
import { ExtractoService } from '../extracto.service';

@Component({
  selector: 'app-generar-extracto',
  standalone: true,
  imports: [],
  templateUrl: './generar-extracto.component.html',
  styleUrl: './generar-extracto.component.css'
})
export class GenerarExtractoComponent implements OnInit {

  cuentaId: number;
  mes: number; //

  extracto: any[];

  constructor(private extractoService: ExtractoService) { }

  ngOnInit(): void {
    this.generarExtracto();
  }

  generarExtracto() {
    this.extractoService.generarExtractoMensual(this.cuentaId, this.mes).subscribe(
      extracto => this.extracto = extracto,
      error => console.error(error)
    );
  }

}
