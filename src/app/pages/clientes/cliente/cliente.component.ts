import { Component, OnInit } from '@angular/core';
import { ClienteService } from '../../../services/cliente.service';
import { Cliente } from '../../../interfaces/cliente.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {

  public clientes: Cliente[] = [];

  constructor(
    private clienteService: ClienteService,
    private router: Router
  ) { }

  ngOnInit(): void {
    // Obtener listado de clientes
    this.clienteService.getClientes().subscribe(
      clientes => {
        this.clientes = clientes;
        console.log(this.clientes);
      }
    );
  }

  mostrarCliente(id) {
    this.router.navigate(['/clientes/mostrar', id]);
  }

}
