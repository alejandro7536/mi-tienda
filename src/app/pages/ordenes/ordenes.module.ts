import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrdenComponent } from './orden/orden.component';
import { AgregarOrdenComponent } from './agregar-orden/agregar-orden.component';
import { AppRoutingModule } from '../../app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [OrdenComponent, AgregarOrdenComponent],
  imports: [
    CommonModule,
    AppRoutingModule,
    ReactiveFormsModule
  ]
})
export class OrdenesModule { }
