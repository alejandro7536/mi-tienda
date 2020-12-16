import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Orden } from '../interfaces/orden.interface';
import { OrdenCompleta } from '../interfaces/ordenCompleta.interface';
import { ClienteService } from './cliente.service';
import { ProductoService } from './producto.service';
import { map } from 'rxjs/operators';
import { Cliente } from '../interfaces/cliente.interface';
import { Producto } from '../interfaces/producto.interface';

@Injectable({
  providedIn: 'root'
})
export class OrdenService {

  private url = `${environment.baseUrl}/ordenes`;

  constructor(
    private http: HttpClient,
    private clienteService: ClienteService,
    private productoService: ProductoService
  ) { }

  getOrdenes() {
    return this.http.get<OrdenCompleta[]>(this.url).pipe(
      map((ordenes: any) => {
        ordenes.map((orden: OrdenCompleta) => {
          this.clienteService.getCliente(orden.idCliente).subscribe((cliente: Cliente) => orden.cliente = cliente);
          this.productoService.getProducto(orden.idProducto).subscribe((producto: Producto) => {
            orden.producto = producto;
            orden.total = orden.cantidad * orden.producto.precio;
          }); 
          return orden;
        });
        console.log(ordenes);
        return ordenes;
      })
    );
  }

  getOrden(id: number) {
    return this.http.get<Orden>(`${this.url}/${id}`);
  }

  addOrden(orden: Orden) {
    return this.http.post(this.url, orden);
  }
}
