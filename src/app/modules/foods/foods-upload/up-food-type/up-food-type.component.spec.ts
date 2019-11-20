import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpFoodTypeComponent } from './up-food-type.component';

describe('UpFoodTypeComponent', () => {
  let component: UpFoodTypeComponent;
  let fixture: ComponentFixture<UpFoodTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpFoodTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpFoodTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
