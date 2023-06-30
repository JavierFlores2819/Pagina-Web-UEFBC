import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormInfoGeneralComponent } from './form-info-general.component';

describe('FormInfoGeneralComponent', () => {
  let component: FormInfoGeneralComponent;
  let fixture: ComponentFixture<FormInfoGeneralComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormInfoGeneralComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormInfoGeneralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
