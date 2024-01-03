import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenerarExtractoComponent } from './generar-extracto.component';

describe('GenerarExtractoComponent', () => {
  let component: GenerarExtractoComponent;
  let fixture: ComponentFixture<GenerarExtractoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GenerarExtractoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GenerarExtractoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
