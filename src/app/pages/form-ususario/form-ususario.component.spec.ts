import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormUsusarioComponent } from './form-ususario.component';

describe('FormUsusarioComponent', () => {
  let component: FormUsusarioComponent;
  let fixture: ComponentFixture<FormUsusarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormUsusarioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormUsusarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
