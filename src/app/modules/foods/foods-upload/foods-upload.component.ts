import { Component, OnInit } from '@angular/core';
import { FoodloadTypeId, FoodType } from '../../../models/food.model';
@Component({
  selector: 'ngx-foods-upload',
  templateUrl: './foods-upload.component.html',
  styleUrls: ['./foods-upload.component.scss']
})
export class FoodsUploadComponent implements OnInit {
  foodList: FoodType[] = [
    {
      id: FoodloadTypeId.UPLOAD_FOOD,
      name: 'Thêm Món Ăn'
    },
    {
      id: FoodloadTypeId.UPLOAD_TYPE ,
      name: 'Thêm Loại Món'
    }
  ];
  selectedItem = this.foodList[0];
  fullWidth: Boolean = true;
  constructor() { }

  ngOnInit() {
  }

}
