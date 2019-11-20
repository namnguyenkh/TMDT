import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FoodsRoutingModule } from './foods-routing.module';
import { FoodsComponent } from './foods.component';
import { FoodsListComponent } from './foods-list/foods-list.component';
import { FoodsUploadComponent } from './foods-upload/foods-upload.component';
import { UpFoodComponent } from './foods-upload/up-food/up-food.component';
import { UpFoodTypeComponent } from './foods-upload/up-food-type/up-food-type.component';
import {
  NbInputModule,
  NbTableModule,
  NbCardModule,
  NbIconModule,
  NbDialogModule,
  NbSelectModule,
  NbCheckboxModule,
  NbLayoutModule,
  NbButtonModule,
  NbRadioModule,
  NbContextMenuModule,
  NbAccordionModule
} from '@nebular/theme';
import { SplitButtonModule } from 'primeng/splitbutton';
import { ColorPickerModule } from 'ngx-color-picker';
import { InputSwitchModule } from 'primeng/inputswitch';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TableModule } from 'primeng/table';
import { PaginatorModule } from 'primeng/paginator';
import { ButtonModule } from 'primeng/button';
import { MenuModule } from 'primeng/menu';
import { MultiSelectModule } from 'primeng/multiselect';
import { SharedModule } from 'primeng/components/common/shared';
import { CovalentDataTableModule } from '@covalent/core/data-table';
import {MatIconModule} from '@angular/material/icon';

@NgModule({
  declarations: [FoodsComponent, FoodsListComponent, FoodsUploadComponent, UpFoodComponent, UpFoodTypeComponent],
  imports: [
    CommonModule,
    FoodsRoutingModule,
    CommonModule,
    CommonModule,
    NbInputModule,
    SplitButtonModule,
    NbTableModule,
    NbCardModule,
    NbIconModule,
    NbDialogModule.forChild(),
    NbSelectModule,
    NbCheckboxModule,
    NbLayoutModule,
    NbButtonModule,
    NbRadioModule,
    NbContextMenuModule,
    NbAccordionModule,
    ColorPickerModule,
    InputSwitchModule,
    NgbModule,
    TableModule,
    PaginatorModule,
    ButtonModule,
    MenuModule,
    InputSwitchModule,
    SplitButtonModule,
    MultiSelectModule,
    SharedModule,
    CovalentDataTableModule,
    MatIconModule,
    NbCheckboxModule
  ]
})
export class FoodsModule { }
