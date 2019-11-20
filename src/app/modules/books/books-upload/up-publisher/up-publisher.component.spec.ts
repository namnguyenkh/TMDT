import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpPublisherComponent } from './up-publisher.component';

describe('UpPublisherComponent', () => {
  let component: UpPublisherComponent;
  let fixture: ComponentFixture<UpPublisherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpPublisherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpPublisherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
