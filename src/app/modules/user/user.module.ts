import { NgModule } from '@angular/core';
import { UserComponent } from './user.component';
import { ContractComponent } from './contract/contract.component';
import { HistoricalComponent } from './historical/historical.component';
import { UserManageRoutingModule } from './user-routing.module';
import { UserListComponent } from './user-list/user-list.component';
import {
  NbListModule,
  NbCardModule,
  NbIconModule,
  NbInputModule,
  NbDialogModule,
  NbSelectModule,
  NbCheckboxModule,
  NbLayoutModule,
  NbButtonModule,
  NbRadioModule,
  NbDatepickerModule
} from '@nebular/theme';
import { ShipperComponent } from './shipper/shipper.component';

@NgModule({
  declarations: [
    UserComponent,
    UserListComponent,
    ContractComponent,
    HistoricalComponent,
    ShipperComponent
  ],
  imports: [
    UserManageRoutingModule,
    NbCardModule,
    NbInputModule,
    NbCardModule,
    NbIconModule,
    NbInputModule,
    NbDialogModule,
    NbSelectModule,
    NbCheckboxModule,
    NbLayoutModule,
    NbButtonModule,
    NbRadioModule,
    NbDatepickerModule ]
})
export class UserModule {}
