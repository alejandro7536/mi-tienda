import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { ClienteComponent } from './cliente/cliente.component';
import { AgregarClienteComponent } from './agregar-cliente/agregar-cliente.component';
import { VerClienteComponent } from './ver-cliente/ver-cliente.component';


const routes: Routes = [
    {
        path: 'clientes',
        children: [
            { path: '', component: ClienteComponent },
            { path: 'agregar', component: AgregarClienteComponent },
            { path: 'mostrar/:id', component: VerClienteComponent },
        ]
    },

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ClienteRoutingModule { }
