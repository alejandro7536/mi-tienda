import { Component, OnInit } from '@angular/core';
import { ProductoService } from '../../../services/producto.service';
import { Producto } from '../../../interfaces/producto.interface';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {

  public productos: Producto[] = [];

  constructor(
    private productoService: ProductoService,

  ) { }

  ngOnInit(): void {

    //Cargar listado de productos
    this.productoService.getProductos().subscribe(
      productos => {
        this.productos = productos;
        // console.log(this.productos);   
      }
    );
  }

}
