import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodsUploadComponent } from './foods-upload.component';

describe('FoodsUploadComponent', () => {
  let component: FoodsUploadComponent;
  let fixture: ComponentFixture<FoodsUploadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FoodsUploadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FoodsUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
