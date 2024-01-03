import {Component, OnInit} from '@angular/core';
import {Cliente} from "../cliente";
import {ActivatedRoute} from "@angular/router";
import {ClienteService} from "../cliente.service";

@Component({
  selector: 'app-cliente-detalle',
  standalone: true,
  //imports: [],
  templateUrl: './cliente-detalle.component.html',
  styleUrl: './cliente-detalle.component.css'
})
export class ClienteDetalleComponent implements OnInit {

  id:number;
  cliente:Cliente;
  constructor(private route:ActivatedRoute, private clienteService:ClienteService){

  }
  ngOnInit():void {
    this.id=this.route.snapshot.params['id'];
    this.cliente=new Cliente(this.id, "", "","");
    this.clienteService.obtenerClientePorId(this.id).subscribe(dato=>{
      this.cliente=dato;
    });
  }

}
