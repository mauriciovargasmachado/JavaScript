import { Empleado } from "./empleado.model";

export class EmpleadosService {

    empleados:Empleado[]=[

        new Empleado('Juan',"Vargas",'Contador',3500),
        new Empleado('Daniela',"Ozorio",'Gerente',4500),
        new Empleado('Milton',"Uribe",'tesorero',2500),
        new Empleado('Jay',"Daniels",'Inspector',3500)
    ];

    agregarEmpleadoServicio(empleado:Empleado){

    this.empleados.push(empleado);
}

}