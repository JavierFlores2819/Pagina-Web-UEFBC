import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportCalificacionesComponent } from './report-calificaciones.component';

describe('ReportCalificacionesComponent', () => {
  let component: ReportCalificacionesComponent;
  let fixture: ComponentFixture<ReportCalificacionesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReportCalificacionesComponent]
    });
    fixture = TestBed.createComponent(ReportCalificacionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
