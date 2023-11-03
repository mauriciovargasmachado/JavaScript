/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CaracteristicasEmpleadoComponent } from './caracteristicas-empleado.component';

describe('CaracteristicasEmpleadoComponent', () => {
  let component: CaracteristicasEmpleadoComponent;
  let fixture: ComponentFixture<CaracteristicasEmpleadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CaracteristicasEmpleadoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CaracteristicasEmpleadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
