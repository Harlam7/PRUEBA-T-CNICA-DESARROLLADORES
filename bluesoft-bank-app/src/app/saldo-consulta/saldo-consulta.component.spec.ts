import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaldoConsultaComponent } from './saldo-consulta.component';

describe('SaldoConsultaComponent', () => {
  let component: SaldoConsultaComponent;
  let fixture: ComponentFixture<SaldoConsultaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SaldoConsultaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SaldoConsultaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
