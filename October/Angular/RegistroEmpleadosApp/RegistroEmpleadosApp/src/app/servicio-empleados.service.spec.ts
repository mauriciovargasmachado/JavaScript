/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ServicioEmpleadosService } from './servicio-empleados.service';

describe('Service: ServicioEmpleados', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ServicioEmpleadosService]
    });
  });

  it('should ...', inject([ServicioEmpleadosService], (service: ServicioEmpleadosService) => {
    expect(service).toBeTruthy();
  }));
});
