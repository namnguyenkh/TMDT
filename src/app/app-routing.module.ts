import { RouterModule, Routes, PreloadAllModules } from '@angular/router';
import { NgModule } from '@angular/core';
import { Shell } from './services/shell.service';
import { DashboardComponent } from './modules/dashboard/dashboard.component';

const routes: Routes = [
  Shell.childRoutes([
    {
      path: '',
      redirectTo: '/client/home',
      pathMatch: 'full'
    },
    {
      path: 'client',
      loadChildren: () => import('./modules/customers/customers.module').then(m => m.CustomersModule)
    },
    {
      path: 'admin/dashboard',
      component: DashboardComponent
    },
    {
      path: 'admin/account',
      loadChildren: () => import('./modules/accounting/accounting.module').then(m => m.AccountingModule)
    },
    {
      path: 'admin/users',
      loadChildren: () => import('./modules/user/user.module').then(m => m.UserModule)
    },
    {
      path: 'admin/report',
      loadChildren: () => import('./modules/reporting/reporting.module').then(m => m.ReportingModule)
    },
    {
      path: 'admin/marketing',
      loadChildren: () => import('./modules/marketing/marketing.module').then(m => m.MarketingModule)
    },
    {
      path: 'admin/book',
      loadChildren: () => import('./modules/books/books.module').then(m => m.BooksModule)
    },
    { path: 'admin/food', loadChildren: () => import('./modules/foods/foods.module').then(m => m.FoodsModule) }
  ])
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      preloadingStrategy: PreloadAllModules,
      useHash: true,
      enableTracing: false
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
