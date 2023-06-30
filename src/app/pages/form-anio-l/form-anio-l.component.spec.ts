import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormAnioLComponent } from './form-anio-l.component';

describe('FormAnioLComponent', () => {
  let component: FormAnioLComponent;
  let fixture: ComponentFixture<FormAnioLComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormAnioLComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormAnioLComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
