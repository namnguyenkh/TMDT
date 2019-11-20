import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomersRoutingModule } from './customers-routing.module';
import { CustomersComponent } from './customers.component';
import { ItemComponent } from './item/item.component';
import { ItemDetailComponent } from './item-detail/item-detail.component';
import { CartComponent } from './cart/cart.component';
import { AboutComponent } from './about/about.component';
import { GenreComponent } from './genre/genre.component';
import { HomeComponent } from './home/home.component';
import { PurchaseByAccountComponent } from './purchase-by-account/purchase-by-account.component';
import { PurchaseNonAccountComponent } from './purchase-non-account/purchase-non-account.component';
import { MenuComponent } from './menu/menu.component';
import { ThankyouComponent } from './thankyou/thankyou.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import {
  NbThemeModule,
  NbLayoutModule,
  NbActionsModule,
  NbMenuModule,
  NbContextMenuModule,
  NbCardModule,
  NbInputModule,
  NbTableModule,
  NbIconModule,
  NbDialogModule,
  NbSelectModule,
  NbCheckboxModule,
  NbButtonModule,
  NbRadioModule,
  NbAccordionModule
} from '@nebular/theme';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SplitButtonModule } from 'primeng/splitbutton';
import { ColorPickerModule } from 'ngx-color-picker';
import { InputSwitchModule } from 'primeng/inputswitch';
import { TableModule } from 'primeng/table';
import { PaginatorModule } from 'primeng/paginator';
import { ButtonModule } from 'primeng/button';
import { MenuModule } from 'primeng/menu';
import { SharedModule } from 'primeng/components/common/shared';
import { MultiSelectModule } from 'primeng/multiselect';

@NgModule({
  declarations: [
    CustomersComponent,
    ItemComponent,
    ItemDetailComponent,
    CartComponent,
    AboutComponent,
    GenreComponent,
    HomeComponent,
    PurchaseByAccountComponent,
    PurchaseNonAccountComponent,
    MenuComponent,
    ThankyouComponent,
    LoginComponent,
    RegisterComponent,
    ForgotPasswordComponent
  ],
  imports: [
    CommonModule,
    CustomersRoutingModule,
    NgbModule,
    NbThemeModule.forRoot({ name: 'default' }),
    NbLayoutModule,
    NbActionsModule,
    NbMenuModule.forRoot(),
    NbContextMenuModule,
    HttpClientModule,
    NbCardModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
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
  ],
  bootstrap: [HomeComponent]
})
export class CustomersModule {}
