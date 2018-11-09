import { Component, OnInit, Input } from '@angular/core';
import { Empleado } from '../shared/models/empleado';

@Component({
  selector: 'app-empleado-detalle',
  templateUrl: './empleado-detalle.component.html',
  styleUrls: ['./empleado-detalle.component.css']
})
export class EmpleadoDetalleComponent implements OnInit {

  constructor() { }
  @Input() 
  empleado : Empleado;
  ngOnInit() {

  }

}
