import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccountingComponent } from './accounting.component';
import { AccountListComponent } from './account-list/account-list.component';
import { PermissionComponent } from './permission/permission.component';

const routes: Routes = [
  {
    path: '',
    component: AccountingComponent,
    children: [
      {
        path: 'list',
        component: AccountListComponent
      },
      {
        path: 'permission',
        component: PermissionComponent
      }
    ]
  }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountingRoutingModule {}
