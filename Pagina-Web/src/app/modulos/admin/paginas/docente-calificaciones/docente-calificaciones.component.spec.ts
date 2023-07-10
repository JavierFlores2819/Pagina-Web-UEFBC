import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocenteCalificacionesComponent } from './docente-calificaciones.component';

describe('DocenteCalificacionesComponent', () => {
  let component: DocenteCalificacionesComponent;
  let fixture: ComponentFixture<DocenteCalificacionesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DocenteCalificacionesComponent]
    });
    fixture = TestBed.createComponent(DocenteCalificacionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
