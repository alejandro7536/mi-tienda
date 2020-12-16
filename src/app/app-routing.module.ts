import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ClienteRoutingModule } from './pages/clientes/clientes.routing';
import { ProductoRoutingModule } from './pages/productos/productos.routing';
import { OrdenRoutingModule } from './pages/ordenes/ordenes.routing';
import { Page404Component } from './error-pages/page404/page404.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'mi-tienda'},
  { path: 'mi-tienda', component: HomeComponent },
  { path: 'notfound', component: Page404Component },
  { path: '**', pathMatch: 'full', redirectTo: 'mi-tienda'}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    ClienteRoutingModule,
    ProductoRoutingModule,
    OrdenRoutingModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
