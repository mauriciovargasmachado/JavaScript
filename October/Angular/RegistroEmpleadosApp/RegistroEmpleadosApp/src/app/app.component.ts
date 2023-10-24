import { Component } from '@angular/core';
import { Empleado } from './empleado.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'RegistroEmpleadosApp';

  empleados:Empleado[]=[

    new Empleado('Juan',"Vargas",'Contador',3500),
    new Empleado('Daniela',"Ozorio",'Gerente',4500),
    new Empleado('Milton',"Uribe",'tesorero',2500),
    new Empleado('Jay',"Daniels",'Inspector',3500)
  ];

  cuadroNombre:string="";
  cuadroApellido:string="";
  cuadroCargo:string="";
  cuadroSalario:number=0;


  agregarEmpleado(){

    let nuevoEmpleado = new Empleado(this.cuadroNombre,this.cuadroApellido,this.cuadroCargo,this.cuadroSalario);

    this.empleados.push(nuevoEmpleado);

  }




}
