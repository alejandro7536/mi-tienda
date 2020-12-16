import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { Page404Component } from './error-pages/page404/page404.component';
import { ClientesModule } from './pages/clientes/clientes.module';
import { ProductosModule } from './pages/productos/productos.module';
import { OrdenesModule } from './pages/ordenes/ordenes.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    Page404Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    ClientesModule,
    ProductosModule,
    OrdenesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
