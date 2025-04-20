import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderposComponent } from './orderpos.component';

describe('OrderposComponent', () => {
  let component: OrderposComponent;
  let fixture: ComponentFixture<OrderposComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrderposComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrderposComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
