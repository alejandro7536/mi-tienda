import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Producto } from '../interfaces/producto.interface';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  private url = `${environment.baseUrl}/productos`;
  public lastId: number;

  constructor(
    private http: HttpClient
  ) { }

  // Obtener el listado de productos
  getProductos() {
    return this.http.get<Producto[]>(this.url);
  }

  // Obtener producto por id
  getProducto(id: number) {
    return this.http.get<Producto>(`${this.url}/${id}`);
  }

  // Agregar un nuevo producto
  addProducto(params: any) {
    let producto: Producto;
    producto = { ...params, id: this.lastId };
    console.log(producto);
    return this.http.post(this.url, producto);
  }


  // Obetener un nuevo id para asignar el nuevo producto, este se ejecuta al momento de entrar a la pantalla de creación
  getIdNuevo() {
    this.http.get<Producto[]>(this.url).subscribe((productos) => {
      this.lastId = productos[productos.length - 1].id + 1;
      console.log(this.lastId);
    });
  }
}
