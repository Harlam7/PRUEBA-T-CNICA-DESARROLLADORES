import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaCuentaComponent } from './lista-cuenta.component';

describe('ListaCuentaComponent', () => {
  let component: ListaCuentaComponent;
  let fixture: ComponentFixture<ListaCuentaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListaCuentaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListaCuentaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
