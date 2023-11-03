import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { ServicioEmpleadosService } from '../servicio-empleados.service';

@Component({
  selector: 'app-caracteristicas-empleado',
  templateUrl: './caracteristicas-empleado.component.html',
  styleUrls: ['./caracteristicas-empleado.component.css']
})
export class CaracteristicasEmpleadoComponent implements OnInit {

  @Output() caracteristicasEmpleados = new EventEmitter<string>();

  constructor(private miPrimerServicio:ServicioEmpleadosService){}

  ngOnInit() {
  }

  agregarCaracteristicas(value:string){
    this.miPrimerServicio.muestraMensaje(value);
    this.caracteristicasEmpleados.emit(value);
  }

}
