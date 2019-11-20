import { NgModule } from '@angular/core';
import { MarketingComponent } from './marketing.component';
import { MarketingListComponent } from './marketing-list/marketing-list.component';
import { UpdateMarketingComponent } from './update-marketing/update-marketing.component';
import { ReportMarketingComponent } from './report-marketing/report-marketing.component';
import { MarketingRoutingModule } from './marketing-routing.module';

@NgModule({
  declarations: [MarketingComponent, MarketingListComponent, UpdateMarketingComponent, ReportMarketingComponent],
  imports: [MarketingRoutingModule]
})
export class MarketingModule {}
