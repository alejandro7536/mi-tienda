import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ClienteService } from '../../../services/cliente.service';
import { Cliente } from '../../../interfaces/cliente.interface';

@Component({
  selector: 'app-ver-cliente',
  templateUrl: './ver-cliente.component.html',
  styleUrls: ['./ver-cliente.component.css']
})
export class VerClienteComponent implements OnInit {

  private idCliente: number;
  public cliente: Cliente;

  constructor(
    private clienteService: ClienteService,
    private activatedRouter: ActivatedRoute,
    private router: Router

  ) {
    this.activatedRouter.params.subscribe(({id}) => this.idCliente = id);
  }

  ngOnInit(): void {
    this.clienteService.getCliente(this.idCliente).subscribe(
      cliente => {
        this.cliente = cliente;
        console.log(this.cliente);
      },
      error => {
        this.router.navigateByUrl('notfound');
      }
    );
  }

}
