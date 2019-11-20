import { NgModule } from '@angular/core';
import { ShellComponent } from './shell.component';
import { NbMenuModule, NbCheckboxModule, NbCalendarModule } from '@nebular/theme';
import { ThemeModule } from './@theme/theme.module';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../core/shared.module';
import { TranslationService } from '../../services/translation.service';

@NgModule({
  declarations: [ShellComponent, DashboardComponent],
  imports: [SharedModule, RouterModule, ThemeModule, NbMenuModule ],
  providers: [TranslationService]
})
export class ShellModule {}
