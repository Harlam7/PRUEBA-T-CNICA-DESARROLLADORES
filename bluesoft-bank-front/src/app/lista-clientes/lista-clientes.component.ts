
import {Component, OnInit} from '@angular/core';
import {Cliente} from "../cliente";
import {ClienteService} from "../cliente.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-lista-clientes',
  //standalone: true,
  //imports: [],
  templateUrl: './lista-clientes.component.html',
  styleUrl: './lista-clientes.component.css'
})
export class ListaClientesComponent implements  OnInit{

  clientes:Cliente[] = [];

  constructor(private clienteServicio:ClienteService, private router:Router) { }

  ngOnInit() {
    this.obtenerClientes();
  }


  actualizarCliente(id: number) {
    this.router.navigate(['actualizar-cliente', id]);
  }

  private obtenerClientes(){
    this.clienteServicio.obtenerListaClientes().subscribe(dato=>{
      this.clientes = dato;
    });
  }

  eliminarCliente(id:number){
    this.clienteServicio.eliminarCliente(id).subscribe(dato=>{
      console.log(dato);
      this.obtenerClientes();
    });
  }

  verDetalles(id:number){
    this.router.navigate(['cliente-detalles', id]);
  }

}
