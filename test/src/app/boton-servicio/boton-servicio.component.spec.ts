import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotonServicioComponent } from './boton-servicio.component';

describe('BotonServicioComponent', () => {
  let component: BotonServicioComponent;
  let fixture: ComponentFixture<BotonServicioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BotonServicioComponent]
    });
    fixture = TestBed.createComponent(BotonServicioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
