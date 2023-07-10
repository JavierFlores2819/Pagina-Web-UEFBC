import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportEstudiantesComponent } from './report-estudiantes.component';

describe('ReportEstudiantesComponent', () => {
  let component: ReportEstudiantesComponent;
  let fixture: ComponentFixture<ReportEstudiantesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReportEstudiantesComponent]
    });
    fixture = TestBed.createComponent(ReportEstudiantesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
