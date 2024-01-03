import {Component, OnInit} from '@angular/core';
import {Cliente} from "../cliente";
import {FormsModule} from "@angular/forms";
import {ClienteService} from "../cliente.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-registar-cliente',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './registar-cliente.component.html',
  styleUrl: './registar-cliente.component.css'
})
export class RegistarClienteComponent implements OnInit{

  cliente: Cliente = new Cliente(0, "Nombre", "Ciudad Origen", "Ciudad Actual");
  constructor(private clienteService:ClienteService, private router:Router) {}

  ngOnInit() {
  }

  guardarCliente(){
    this.clienteService.registarCliente(this.cliente).subscribe(dato=>{
console.log(dato);
this.irAListaCliente();
    },error =>  console.log(error));
  }

  irAListaCliente(){
    this.router.navigate(['/clientes']);
  }

  onSubmit(){
    this.guardarCliente();
  }

  //protected readonly onsubmit = onsubmit;
  protected readonly onsubmit = onsubmit;
}
