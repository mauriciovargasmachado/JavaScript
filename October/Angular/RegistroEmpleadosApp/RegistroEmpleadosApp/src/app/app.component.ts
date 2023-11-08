import { Component } from '@angular/core';
import { Empleado } from './empleado.model';
import { ServicioEmpleadosService } from './servicio-empleados.service';
import { EmpleadosService } from './empleado.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private miPrimerServicio:ServicioEmpleadosService,private empleadosService:EmpleadosService){

    this.empleados=this.empleadosService.empleados;
  }

  title = 'RegistroEmpleadosApp';

  empleados:Empleado[]=[]


  cuadroNombre:string="";
  cuadroApellido:string="";
  cuadroCargo:string="";
  cuadroSalario:number=0;


  agregarEmpleado(){

    let nuevoEmpleado = new Empleado(this.cuadroNombre,this.cuadroApellido,this.cuadroCargo,this.cuadroSalario);

    this.miPrimerServicio.muestraMensaje('Usted va a agregar a: '+ nuevoEmpleado.nombre);

    this.empleadosService.agregarEmpleadoServicio(nuevoEmpleado);

  }




}
