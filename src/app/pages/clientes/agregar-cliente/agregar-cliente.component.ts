import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ClienteService } from '../../../services/cliente.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-agregar-cliente',
  templateUrl: './agregar-cliente.component.html',
  styleUrls: ['./agregar-cliente.component.css']
})
export class AgregarClienteComponent implements OnInit {

  form: FormGroup

  constructor(
    private clienteService: ClienteService,
    private fb: FormBuilder,
    private router: Router
  ) {
    this.clienteService.getIdNuevo();
    this.crearformulario();
  }

  ngOnInit(): void {
  }

  crearformulario() {
    this.form = this.fb.group({
      nombre: ['', [Validators.required, Validators.minLength(3)]],
      apellidos: ['', [Validators.required, Validators.minLength(3)]]
    });
  }

  guardar() {
    // console.log(this.form);
    console.log('Is valid ',this.form.valid);
    if (this.form.valid) {
      this.clienteService.addCliente(this.form.value).subscribe(
        res => {
          console.log('Se guardo');
          this.router.navigateByUrl('/clientes');
        }
      )
    }
  }

}
