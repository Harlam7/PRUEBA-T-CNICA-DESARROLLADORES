import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Cliente} from "./cliente";

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  // Listado de clientes en el back
  private baseURL = "http://localhost:8080/clientes";

  constructor(private http : HttpClient) { }

  // Método para obtener los clientes
  obtenerListaClientes():Observable<Cliente[]>{
    return this.http.get<Cliente[]>(`${this.baseURL}`);
  }

  registarCliente(cliente:Cliente):Observable<Object>{
    return this.http.post(`${this.baseURL}`, cliente);
  }

  actualizarCliente(id:number, cliente:Cliente):Observable<Object>{
    return this.http.put(`${this.baseURL}/${id}`, cliente);
  }

  obtenerClientePorId(id:number):Observable<Cliente>{
    return this.http.get<Cliente>(`${this.baseURL}/${id}`);
  }

  eliminarCliente(id:number):Observable<Object>{
    return this.http.delete(`${this.baseURL}/${id}`);
  }

}
