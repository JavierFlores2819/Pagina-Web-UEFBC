import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalificacionCuanComponent } from './calificacion-cuan.component';

describe('CalificacionCuanComponent', () => {
  let component: CalificacionCuanComponent;
  let fixture: ComponentFixture<CalificacionCuanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalificacionCuanComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CalificacionCuanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
