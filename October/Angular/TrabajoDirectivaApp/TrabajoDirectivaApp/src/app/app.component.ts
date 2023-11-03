import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  titulo = 'Registro de usuarios';
  mensaje = "";
  registrado = false;
  nombre:string ="Insert your name";
  apellido:string ="Insert your last name";
  cargo:string="Inser your current position";
  entradas: { titulo: string }[] = [];


  constructor(){
    this.entradas=[
      {titulo:"Python"},
      {titulo:"Java"},
      {titulo:"JavaScript"},
      {titulo:"C"}
    ]
  }

  registrarUsuario(){
    this.registrado =true;
    this.mensaje='El '+this.cargo+', '+this.nombre+' '+this.apellido+' ha sido registrado con exito!!!'
  }
}
