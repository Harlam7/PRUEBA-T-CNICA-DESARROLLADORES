import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultarMovimientoComponent } from './consultar-movimiento.component';

describe('ConsultarMovimientoComponent', () => {
  let component: ConsultarMovimientoComponent;
  let fixture: ComponentFixture<ConsultarMovimientoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConsultarMovimientoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ConsultarMovimientoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
