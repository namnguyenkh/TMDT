import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MarketingComponent } from './marketing.component';
import { UpdateMarketingComponent } from './update-marketing/update-marketing.component';
import { ReportMarketingComponent } from './report-marketing/report-marketing.component';
import { MarketingListComponent } from './marketing-list/marketing-list.component';

const routes: Routes = [
  {
    path: '',
    component: MarketingComponent,
    children: [
      {
        path: 'list',
        component: MarketingListComponent
      },
      {
        path: 'report',
        component: ReportMarketingComponent
      },
      {
        path: 'create',
        component: UpdateMarketingComponent
      }
    ]
  }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MarketingRoutingModule {}
