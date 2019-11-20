import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReportingComponent } from './reporting.component';
import { ReportUserAccessComponent } from './report-user-access/report-user-access.component';
import { ReportUserPartnerComponent } from './report-user-partner/report-user-partner.component';

const routes: Routes = [
  {
    path: '',
    component: ReportingComponent,
    children: [
      {
        path: 'user-access',
        component: ReportUserAccessComponent
      },
      {
        path: 'user-partner',
        component: ReportUserPartnerComponent
      }
    ]
  }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReportingRoutingModule {}
