import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportAlumnoCursoComponent } from './report-alumno-curso.component';

describe('ReportAlumnoCursoComponent', () => {
  let component: ReportAlumnoCursoComponent;
  let fixture: ComponentFixture<ReportAlumnoCursoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReportAlumnoCursoComponent]
    });
    fixture = TestBed.createComponent(ReportAlumnoCursoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
