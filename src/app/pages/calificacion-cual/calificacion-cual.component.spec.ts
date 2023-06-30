import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalificacionCualComponent } from './calificacion-cual.component';

describe('CalificacionCualComponent', () => {
  let component: CalificacionCualComponent;
  let fixture: ComponentFixture<CalificacionCualComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalificacionCualComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CalificacionCualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
