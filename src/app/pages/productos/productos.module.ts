import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductoComponent } from './producto/producto.component';
import { AgregarProductoComponent } from './agregar-producto/agregar-producto.component';
import { VerProductoComponent } from './ver-producto/ver-producto.component';
import { AppRoutingModule } from '../../app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [ProductoComponent, AgregarProductoComponent, VerProductoComponent],
  imports: [
    CommonModule,
    AppRoutingModule,
    ReactiveFormsModule
  ]
})
export class ProductosModule { }
