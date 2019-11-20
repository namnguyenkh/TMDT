import { NgModule } from '@angular/core';
import { AccountingComponent } from './accounting.component';
import { AccountListComponent } from './account-list/account-list.component';
import { AccountingRoutingModule } from './accounting-routing.module';
import { PermissionComponent } from './permission/permission.component';
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

@NgModule({
  declarations: [AccountingComponent, AccountListComponent, PermissionComponent],
  imports: [
    AccountingRoutingModule,
    NbCardModule,
    NbInputModule,
    NbIconModule,
    NbDialogModule,
    NbSelectModule,
    NbCheckboxModule,
    NbLayoutModule,
    NbButtonModule,
    NbRadioModule,
    NbRadioModule,
    NbDatepickerModule
  ]
})
export class AccountingModule {}
