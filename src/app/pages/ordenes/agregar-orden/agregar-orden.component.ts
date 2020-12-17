import { Component, DoCheck, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

import { combineLatest } from 'rxjs';

import { ClienteService } from '../../../services/cliente.service';
import { ProductoService } from '../../../services/producto.service';
import { OrdenService } from '../../../services/orden.service';
import { Cliente } from '../../../interfaces/cliente.interface';
import { Producto } from '../../../interfaces/producto.interface';

@Component({
  selector: 'app-agregar-orden',
  templateUrl: './agregar-orden.component.html',
  styleUrls: ['./agregar-orden.component.css']
})
export class AgregarOrdenComponent implements OnInit, DoCheck {

  public clientes: Cliente[] = [];
  public productos: Producto[] = [];
  public loading = false;
  public form: FormGroup;
  public total = 0;

  toastOptions = {
    closeButton: true,
    progressBar: true,
    positionClass: 'toast-bottom-right'
  }


  constructor(
    private clienteService: ClienteService,
    private productoService: ProductoService,
    private ordenService: OrdenService,
    private router: Router,
    private fb: FormBuilder,
    private toastr: ToastrService

  ) { 
    this.crearFormulario();
    this.ordenService.getIdNuevo();
  }


  ngDoCheck(): void {

    this.total = 0;
    if(this.form.value.idProducto > 0 && this.form.value.cantidad ){
      this.total = this.productos[this.form.value.idProducto - 1].precio * this.form.value.cantidad ;
    }
    
  }

  ngOnInit(): void {
    this.loading = true;
    combineLatest([
      this.clienteService.getClientes(),
      this.productoService.getProductos()
    ]).subscribe(([clientes, productos]: [Cliente[], Producto[]]) => {
      this.loading = false;
      this.clientes = clientes;
      this.productos = productos;
    });
  }

  crearFormulario() {
    this.form = this.fb.group({
      idProducto: ['0', [Validators.required, Validators.min(1)]],
      idCliente: ['0', [Validators.required, Validators.min(1)]],
      cantidad: ['', [Validators.required, Validators.min(1)]]
    });
  }

  guardar() {
    console.log('Is valid ',this.form.valid);
    if (this.form.valid) {
      this.ordenService.addOrden(this.form.value).subscribe(
        res => {
          console.log('Se guardo');
          this.toastr.success('Orden guardada', 'Success!', this.toastOptions);
          this.router.navigateByUrl('/ordenes');
        }
      );
    } else {
      this.toastr.error('Datos incompletos', 'Error!', this.toastOptions);
    }
  }

}
