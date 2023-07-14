import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsignarParaleloProfesorComponent } from './asignar-paralelo-profesor.component';

describe('AsignarParaleloProfesorComponent', () => {
  let component: AsignarParaleloProfesorComponent;
  let fixture: ComponentFixture<AsignarParaleloProfesorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AsignarParaleloProfesorComponent]
    });
    fixture = TestBed.createComponent(AsignarParaleloProfesorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
