import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClienteComponent } from './cliente/cliente.component';
import { VerClienteComponent } from './ver-cliente/ver-cliente.component';
import { AgregarClienteComponent } from './agregar-cliente/agregar-cliente.component';
import { AppRoutingModule } from '../../app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [ClienteComponent, VerClienteComponent, AgregarClienteComponent],
  imports: [
    CommonModule,
    AppRoutingModule,
    ReactiveFormsModule
  ]
})
export class ClientesModule { }
