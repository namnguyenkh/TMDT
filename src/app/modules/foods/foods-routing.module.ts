import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FoodsComponent } from './foods.component';
import { UpFoodComponent } from './foods-upload/up-food/up-food.component';
import { UpFoodTypeComponent } from './foods-upload/up-food-type/up-food-type.component';
import { FoodsListComponent } from './foods-list/foods-list.component';
import { FoodsUploadComponent } from './foods-upload/foods-upload.component';

const routes: Routes = [
  {
    path: '',
    component: FoodsComponent,
    children: [
      {
        path: 'food-list',
        component: FoodsListComponent
      },
      {
        path: 'food-upload',
        component: FoodsUploadComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FoodsRoutingModule { }
