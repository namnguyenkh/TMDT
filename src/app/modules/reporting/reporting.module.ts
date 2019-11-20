import { NgModule } from '@angular/core';
import { ReportingComponent } from './reporting.component';
import { ReportUserAccessComponent } from './report-user-access/report-user-access.component';
import { ReportUserPartnerComponent } from './report-user-partner/report-user-partner.component';
import { ReportingRoutingModule } from './reporting-routing.module';
import { SharedModule } from '../core/shared.module';

@NgModule({
  declarations: [
    ReportingComponent,
    ReportUserAccessComponent,
    ReportUserPartnerComponent
  ],
  imports: [ReportingRoutingModule, SharedModule]
})
export class ReportingModule {}
