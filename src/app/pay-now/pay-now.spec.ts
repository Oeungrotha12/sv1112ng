import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PayNow } from './pay-now';

describe('PayNow', () => {
  let component: PayNow;
  let fixture: ComponentFixture<PayNow>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PayNow]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PayNow);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
