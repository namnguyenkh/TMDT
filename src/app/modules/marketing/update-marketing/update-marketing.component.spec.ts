import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateMarketingComponent } from './update-marketing.component';

describe('UpdateMarketingComponent', () => {
  let component: UpdateMarketingComponent;
  let fixture: ComponentFixture<UpdateMarketingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateMarketingComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateMarketingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
