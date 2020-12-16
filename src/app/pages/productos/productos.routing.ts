import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { ProductoComponent } from './producto/producto.component';
import { AgregarProductoComponent } from './agregar-producto/agregar-producto.component';
import { VerProductoComponent } from './ver-producto/ver-producto.component';

const routes: Routes = [
    {
        path: 'productos',
        children: [
            { path: '', component: ProductoComponent },
            { path: 'agregar', component: AgregarProductoComponent },
            { path: 'mostrar/:id', component: VerProductoComponent },
        ]
    },

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ProductoRoutingModule { }
