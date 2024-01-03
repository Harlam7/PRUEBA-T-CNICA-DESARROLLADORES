import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExtractoService {

  private apiUrl = 'http://localhost:8080/extractos';

  constructor(private http: HttpClient) { }

  generarExtractoMensual(cuentaId: number, mes: number): Observable<any[]> {
    const url = `${this.apiUrl}/${cuentaId}/extracto-mensual?mes=${mes}`;
    return this.http.get<any[]>(url);
  }

}
