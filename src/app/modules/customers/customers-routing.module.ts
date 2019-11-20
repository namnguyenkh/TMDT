import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CustomersComponent } from './customers.component';
import { HomeComponent } from './home/home.component';
import { ItemComponent } from './item/item.component';
import { ItemDetailComponent } from './item-detail/item-detail.component';
import { AboutComponent } from './about/about.component';
import { GenreComponent } from './genre/genre.component';
import { CartComponent } from './cart/cart.component';
import { PurchaseNonAccountComponent } from './purchase-non-account/purchase-non-account.component';
import { PurchaseByAccountComponent } from './purchase-by-account/purchase-by-account.component';
import { MenuComponent } from './menu/menu.component';
import { ThankyouComponent } from './thankyou/thankyou.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';

const routes: Routes = [{
  path: '', component: CustomersComponent
  ,
  children: [
    {
      path: 'home',
      component: HomeComponent
    },
    {
      path: 'item',
      component: ItemComponent
    },
    {
      path: 'item-detail',
      component: ItemDetailComponent
    },
    {
      path: 'about',
      component: AboutComponent
    },
    {
      path: 'menu',
      component: MenuComponent
    },
    {
      path: 'genre',
      component: GenreComponent
    },
    {
      path: 'cart',
      component: CartComponent
    },
    {
      path: 'purchase',
      component: PurchaseNonAccountComponent
    },
    {
      path: 'login-purchase',
      component: PurchaseByAccountComponent
    },
    {
      path: 'thanks-you',
      component: ThankyouComponent
    },
    {
      path: 'login',
      component: LoginComponent
    },
    {
      path: 'register',
      component: RegisterComponent
    },
    {
      path: 'forgot',
      component: ForgotPasswordComponent
    },
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomersRoutingModule { }
