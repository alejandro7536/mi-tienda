import { Component, OnInit } from '@angular/core';
import { OrdenService } from '../../../services/orden.service';
import { OrdenCompleta } from '../../../interfaces/ordenCompleta.interface';

@Component({
  selector: 'app-orden',
  templateUrl: './orden.component.html',
  styleUrls: ['./orden.component.css']
})
export class OrdenComponent implements OnInit {

  public ordenes: OrdenCompleta[] = [];

  constructor(
    private ordenService: OrdenService
  ) { }

  ngOnInit(): void {
    this.ordenService.getOrdenes().subscribe(
      ordenes => {
        this.ordenes = ordenes;
      }
    );
  }

}
