import { Component, OnInit } from '@angular/core';
import { ProductoService } from '../../../services/producto.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Producto } from '../../../interfaces/producto.interface';

@Component({
  selector: 'app-ver-producto',
  templateUrl: './ver-producto.component.html',
  styleUrls: ['./ver-producto.component.css']
})
export class VerProductoComponent implements OnInit {

  private idProducto: number;
  public producto: Producto;

  constructor(
    private productoService: ProductoService,
    private activatedRouter: ActivatedRoute,
    private router: Router
  ) {
    this.activatedRouter.params.subscribe(({id}) => this.idProducto = id);
   }

  ngOnInit(): void {
    this.productoService.getProducto(this.idProducto).subscribe(
      producto => {
        this.producto = producto;
      },
      error => {
        this.router.navigateByUrl('notfound');
      }
    );
  }

}
