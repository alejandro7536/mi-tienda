import { Producto } from './producto.interface';
import { Cliente } from './cliente.interface';

// Creada para tener la orden con el producto y el cliente
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