import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpGenresComponent } from './up-genres.component';

describe('UpGenresComponent', () => {
  let component: UpGenresComponent;
  let fixture: ComponentFixture<UpGenresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpGenresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpGenresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
