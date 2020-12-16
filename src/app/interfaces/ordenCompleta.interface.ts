import { Producto } from './producto.interface';
import { Cliente } from './cliente.interface';
export interface OrdenCompleta {

    id: number;
    idProducto: number;
    idCliente: number;
    producto: Producto;
    cliente: Cliente;
    cantidad: number;
    total: number;
    fecha: Date;
 }