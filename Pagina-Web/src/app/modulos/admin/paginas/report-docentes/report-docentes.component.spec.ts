import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportDocentesComponent } from './report-docentes.component';

describe('ReportDocentesComponent', () => {
  let component: ReportDocentesComponent;
  let fixture: ComponentFixture<ReportDocentesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReportDocentesComponent]
    });
    fixture = TestBed.createComponent(ReportDocentesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
