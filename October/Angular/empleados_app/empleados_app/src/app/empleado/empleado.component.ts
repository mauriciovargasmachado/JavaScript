import { Component } from '@angular/core';

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  styleUrls: ['./empleado.component.css']
})
export class EmpleadoComponent {

  nombre ='Juan';
  apellido ='Diaz';
  private edad=28;
  //empresa='Refricarga'

  getEdad(){
    return this.edad;
  }

  accionEmpresa(value:string){

  }

  habilitacionInput = false;
  usuarioRegistrado = false;
  textoRegistro = "No hay nadie registrado"
 

  getUsuarioRegistrado(){
    this.usuarioRegistrado=false;
  }

  setUsuarioRegistrado(event:Event){
    //alert('Usuario se ha registrado')

    if ((<HTMLInputElement>event.target).value=='si'){
      this.textoRegistro = 'El usuario Ha sido registrado.';
    }else{
      this.textoRegistro = 'Usuario  No registrado.';
    }
  }


}
