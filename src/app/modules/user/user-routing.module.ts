import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user.component';
import { UserListComponent } from './user-list/user-list.component';
import { ContractComponent } from './contract/contract.component';
import { HistoricalComponent } from './historical/historical.component';
import { ShipperComponent } from './shipper/shipper.component';

const routes: Routes = [
  {
    path: '',
    component: UserComponent,
    children: [
      {
        path: 'list',
        component: UserListComponent
      },
      {
        path: 'contracts',
        component: ContractComponent
      },
      {
        path: 'historical',
        component: HistoricalComponent
      },
      {
        path: 'shipper',
        component: ShipperComponent
      }
    ]
  }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserManageRoutingModule {}
