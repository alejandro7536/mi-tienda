import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { OrdenComponent } from './orden/orden.component';
import { AgregarOrdenComponent } from './agregar-orden/agregar-orden.component';


const routes: Routes = [
    {
        path: 'ordenes',
        children: [
            { path: '', component: OrdenComponent },
            { path: 'agregar', component: AgregarOrdenComponent }
        ]
    },

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class OrdenRoutingModule { }
