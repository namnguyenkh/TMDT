import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpBookComponent } from './up-book.component';

describe('UpBookComponent', () => {
  let component: UpBookComponent;
  let fixture: ComponentFixture<UpBookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpBookComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
