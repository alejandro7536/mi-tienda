import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { map } from 'rxjs/operators';

import { ClienteService } from '../../../services/cliente.service';
import { Cliente } from '../../../interfaces/cliente.interface';
import { OrdenService } from '../../../services/orden.service';
import { OrdenCompleta } from '../../../interfaces/ordenCompleta.interface';

@Component({
  selector: 'app-ver-cliente',
  templateUrl: './ver-cliente.component.html',
  styleUrls: ['./ver-cliente.component.css']
})
export class VerClienteComponent implements OnInit {

  private idCliente: number;
  public cliente: Cliente;
  public ordenes: OrdenCompleta[] = [];

  constructor(
    private clienteService: ClienteService,
    private activatedRouter: ActivatedRoute,
    private ordenService: OrdenService,
    private router: Router

  ) {
    // Leer el id de la ruta
    this.activatedRouter.params.subscribe(({ id }) => this.idCliente = id);
  }

  ngOnInit(): void {
    this.clienteService.getCliente(this.idCliente).subscribe(
      cliente => {
        this.cliente = cliente;
      },
      error => {
        this.router.navigateByUrl('notfound');
      }
    );
    this.getOrdersByIdCliente();
  }

  // Obetener las ordenes del cliente mediante su id
  getOrdersByIdCliente() {    
    this.ordenService.getOrdenes().pipe(
      map((ordenes:OrdenCompleta[]) => {
        let or:OrdenCompleta[] = [];
        ordenes.forEach(orden => {
          if(orden.idCliente == this.idCliente){
            or.push(orden);
          }})
        return or;
      })
    ).subscribe(ordenes => {
      this.ordenes = ordenes;
      console.log(this.ordenes);
      
    });
  }

}
