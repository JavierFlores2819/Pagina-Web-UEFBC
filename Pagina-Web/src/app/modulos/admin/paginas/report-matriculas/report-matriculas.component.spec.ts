import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportMatriculasComponent } from './report-matriculas.component';

describe('ReportMatriculasComponent', () => {
  let component: ReportMatriculasComponent;
  let fixture: ComponentFixture<ReportMatriculasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReportMatriculasComponent]
    });
    fixture = TestBed.createComponent(ReportMatriculasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
