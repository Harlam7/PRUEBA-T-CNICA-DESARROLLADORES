import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TransaccionService {

  private apiURL = "http://localhost:8080/transaccion";

  constructor(private http: HttpClient) {}

  consultarMovimientosRecientes(id:number, monto:number): Observable<any[]>{
    const url = `${this.apiURL}/${id}/movimientos-recientes?monto=${monto}`;
    return this.http.get<any[]>(url);
  }

}
