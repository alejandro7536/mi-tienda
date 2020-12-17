import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ProductoService } from '../../../services/producto.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-agregar-producto',
  templateUrl: './agregar-producto.component.html',
  styleUrls: ['./agregar-producto.component.css']
})
export class AgregarProductoComponent implements OnInit {

  form: FormGroup;
  toastOptions = {
    closeButton: true,
    progressBar: true,
    positionClass: 'toast-bottom-right'
  }

  constructor(
    private fb: FormBuilder,
    private productoService: ProductoService,
    private router: Router,
    private toastr: ToastrService
  ) {
    this.productoService.getIdNuevo();
    this.crearformulario();
  }

  ngOnInit(): void {
  }

  // Creacion del formulario
  crearformulario() {
    this.form = this.fb.group({
      nombre: ['', [Validators.required, Validators.minLength(3)]],
      descripcion: ['', [Validators.required, Validators.minLength(3)]],
      precio: ['', [Validators.required, Validators.min(0)]]
    });
  }

  guardar() {
    // Veridicar que el form sea valido
    if (this.form.valid) {
      this.productoService.addProducto(this.form.value).subscribe(
        res => {
          this.toastr.success('Producto guardado', 'Success!', this.toastOptions);
          this.router.navigateByUrl('/productos');
        });
    } else {
      this.toastr.error('Datos incompletos', 'Error!', this.toastOptions);
    }

  }

}
