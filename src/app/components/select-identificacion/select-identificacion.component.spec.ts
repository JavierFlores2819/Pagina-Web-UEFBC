import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectIdentificacionComponent } from './select-identificacion.component';

describe('SelectIdentificacionComponent', () => {
  let component: SelectIdentificacionComponent;
  let fixture: ComponentFixture<SelectIdentificacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectIdentificacionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectIdentificacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
