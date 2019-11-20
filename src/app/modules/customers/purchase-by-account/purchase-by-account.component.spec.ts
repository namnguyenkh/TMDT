import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchaseByAccountComponent } from './purchase-by-account.component';

describe('PurchaseByAccountComponent', () => {
  let component: PurchaseByAccountComponent;
  let fixture: ComponentFixture<PurchaseByAccountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PurchaseByAccountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PurchaseByAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
