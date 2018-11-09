import { Component, OnInit } from '@angular/core';
import { Empleado } from '../shared/models/empleado';
import { EmpleadosMock } from '../shared/empleados-mock';

@Component({
  selector: 'app-empleados',
  templateUrl: './empleados.component.html',
  styleUrls: ['./empleados.component.css']
})
export class EmpleadosComponent implements OnInit {

  empleados : Array<Empleado>;
  empleadoSeleccionado : Empleado;
  constructor() { }

  ngOnInit() {
   this.empleados = EmpleadosMock;

  }

  onSelect(empleado: Empleado): void {
    this.empleadoSeleccionado = empleado;
  }

}
