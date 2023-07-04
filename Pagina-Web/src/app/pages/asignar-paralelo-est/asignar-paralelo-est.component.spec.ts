import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsignarParaleloEstComponent } from './asignar-paralelo-est.component';

describe('AsignarParaleloEstComponent', () => {
  let component: AsignarParaleloEstComponent;
  let fixture: ComponentFixture<AsignarParaleloEstComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AsignarParaleloEstComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AsignarParaleloEstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
