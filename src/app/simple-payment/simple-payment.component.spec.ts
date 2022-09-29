import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimplePaymentComponent } from './simple-payment.component';

describe('SimplePaymentComponent', () => {
  let component: SimplePaymentComponent;
  let fixture: ComponentFixture<SimplePaymentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimplePaymentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SimplePaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
