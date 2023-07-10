import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportCursosComponent } from './report-cursos.component';

describe('ReportCursosComponent', () => {
  let component: ReportCursosComponent;
  let fixture: ComponentFixture<ReportCursosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReportCursosComponent]
    });
    fixture = TestBed.createComponent(ReportCursosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
