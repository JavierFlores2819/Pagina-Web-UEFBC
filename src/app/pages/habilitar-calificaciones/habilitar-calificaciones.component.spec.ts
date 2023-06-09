import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HabilitarCalificacionesComponent } from './habilitar-calificaciones.component';

describe('HabilitarCalificacionesComponent', () => {
  let component: HabilitarCalificacionesComponent;
  let fixture: ComponentFixture<HabilitarCalificacionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HabilitarCalificacionesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HabilitarCalificacionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
