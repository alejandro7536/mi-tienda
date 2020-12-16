import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ProductoService } from '../../../services/producto.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-agregar-producto',
  templateUrl: './agregar-producto.component.html',
  styleUrls: ['./agregar-producto.component.css']
})
export class AgregarProductoComponent implements OnInit {

  form: FormGroup

  constructor(
    private fb: FormBuilder,
    private productoService: ProductoService,
    private router: Router
  ) {
    this.productoService.getIdNuevo();
    this.crearformulario();
   }

  ngOnInit(): void {
  }

  crearformulario() {
    this.form = this.fb.group({
      nombre: ['', [Validators.required, Validators.minLength(3)]],
      descripcion: ['', [Validators.required, Validators.minLength(3)]],
      precio: ['', [Validators.required, Validators.min(0)]]
    });
  }

  guardar() {
    console.log('Is valid ',this.form.valid);
    this.productoService.addProducto(this.form.value).subscribe(
      res => {
        this.router.navigateByUrl('/productos');
      }
    )

  }

}
