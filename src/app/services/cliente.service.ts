import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Cliente } from '../interfaces/cliente.interface';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  private url = `${environment.baseUrl}/clientes`;
  public lastId: number;


  constructor(
    private http: HttpClient
  ) {

   }

  getClientes() {
    return this.http.get<Cliente[]>(this.url);
  }

  getCliente(id: number) {
    return this.http.get<Cliente>(`${this.url}/${id}`);
  }

  addCliente(params: any) {
    let cliente: Cliente;
    cliente = {...params, id: this.lastId};
    console.log(cliente);
    
    return this.http.post(this.url, cliente);
  }

  getIdNuevo() {
    this.http.get<Cliente[]>(this.url).subscribe((clientes) =>  {
      this.lastId = clientes[clientes.length -1].id + 1;
      console.log(this.lastId);
    });
     
  }
}
