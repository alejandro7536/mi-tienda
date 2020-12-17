import { Component, OnInit } from '@angular/core';
import { ClienteService } from '../../services/cliente.service';
import { ProductoService } from '../../services/producto.service';
import { OrdenService } from '../../services/orden.service';
import { combineLatest } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  totalClientes: number;
  totalProductos: number;
  totalOrdenes: number;

  constructor(
    private clienteService:ClienteService,
    private productoService:ProductoService,
    private ordenService:OrdenService,
  ) { }

  ngOnInit(): void {

    // Cálculo de las cantidades de clientes, productos y ordenes
    combineLatest([
      this.clienteService.getClientes(),
      this.productoService.getProductos(),
      this.ordenService.getOrdenes()
    ]).subscribe(([clientes, productos, ordenes])=> {
      this.totalClientes = clientes.length;
      this.totalProductos  = productos.length;
      this.totalOrdenes = ordenes.length;
    })
    
  }

}
