import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportMarketingComponent } from './report-marketing.component';

describe('ReportMarketingComponent', () => {
  let component: ReportMarketingComponent;
  let fixture: ComponentFixture<ReportMarketingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ReportMarketingComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportMarketingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
