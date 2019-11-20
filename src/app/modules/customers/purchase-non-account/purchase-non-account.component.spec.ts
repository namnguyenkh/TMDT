import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchaseNonAccountComponent } from './purchase-non-account.component';

describe('PurchaseNonAccountComponent', () => {
  let component: PurchaseNonAccountComponent;
  let fixture: ComponentFixture<PurchaseNonAccountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PurchaseNonAccountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PurchaseNonAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
