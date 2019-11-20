import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpFoodComponent } from './up-food.component';

describe('UpFoodComponent', () => {
  let component: UpFoodComponent;
  let fixture: ComponentFixture<UpFoodComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpFoodComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpFoodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
