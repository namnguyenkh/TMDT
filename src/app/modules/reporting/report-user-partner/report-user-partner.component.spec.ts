import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportUserPartnerComponent } from './report-user-partner.component';

describe('ReportUserPartnerComponent', () => {
  let component: ReportUserPartnerComponent;
  let fixture: ComponentFixture<ReportUserPartnerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ReportUserPartnerComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportUserPartnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
