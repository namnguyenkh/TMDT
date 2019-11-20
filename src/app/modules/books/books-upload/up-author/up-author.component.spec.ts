import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpAuthorComponent } from './up-author.component';

describe('UpAuthorComponent', () => {
  let component: UpAuthorComponent;
  let fixture: ComponentFixture<UpAuthorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpAuthorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpAuthorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
