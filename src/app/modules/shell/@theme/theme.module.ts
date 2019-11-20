import { ModuleWithProviders, NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {
  NbActionsModule,
  NbLayoutModule,
  NbMenuModule,
  NbSidebarModule,
  NbUserModule,
  NbContextMenuModule,
  NbButtonModule,
  NbSelectModule,
  NbIconModule,
  NbThemeModule,
  NbSpinnerModule,
  NbDatepickerModule,
  NbRadioModule,
  NbCheckboxModule,
  NbDialogModule,
  NbInputModule,
  NbCardModule,
  NbTableModule
} from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';

import { FooterComponent, HeaderComponent } from './components';
import { OneColumnLayoutComponent } from './layouts';
import { BrowserModule } from '@angular/platform-browser';
import { ConfirmationDialogComponent } from './components/dialogs/confirmation-dialog/confirmation-dialog.component';
import { SampleDialogComponent } from './components/dialogs/sample-dialog/sample-dialog.component';
import { TranslateModule } from '@ngx-translate/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DialogService } from '../../../services/dialog.service';
import { ErrorDialogComponent } from './components/dialogs/error-dialog/error-dialog.component';
import { CommonModule } from '@angular/common';
import { PaginatorModule } from 'primeng/paginator';
import { TableModule } from 'primeng/table';
import { SplitButtonModule } from 'primeng/splitbutton';
import { InputSwitchModule } from 'primeng/inputswitch';
import {MegaMenuModule} from 'primeng/megamenu';


const BASE_MODULES = [CommonModule, FormsModule, ReactiveFormsModule, MegaMenuModule];

const NB_MODULES = [
  InputSwitchModule,
  SplitButtonModule,
  TableModule,
  PaginatorModule,
  NbCardModule,
  NbTableModule,
  NbInputModule,
  NbDialogModule,
  NbSelectModule,
  NbCheckboxModule,
  NbLayoutModule,
  NbButtonModule,
  NbRadioModule,
  NbDatepickerModule,
  NbLayoutModule,
  NbMenuModule,
  NbUserModule,
  NbActionsModule,
  NbSidebarModule,
  NbContextMenuModule,
  NbButtonModule,
  NbSelectModule,
  NbIconModule,
  NbEvaIconsModule,
  NbSpinnerModule,
  NgbModule,
  TranslateModule.forChild()
];

const COMPONENTS = [
  HeaderComponent,
  FooterComponent,
  OneColumnLayoutComponent,
  ConfirmationDialogComponent,
  ErrorDialogComponent,
  SampleDialogComponent,
];

const ENTRY_COMPONENTS = [
  ConfirmationDialogComponent,
  ErrorDialogComponent,
  SampleDialogComponent,
];

@NgModule({
  imports: [...BASE_MODULES, ...NB_MODULES],
  exports: [...BASE_MODULES, ...COMPONENTS],
  declarations: [...COMPONENTS],
  entryComponents: [...ENTRY_COMPONENTS]
})
export class ThemeModule {
  static forRoot(): ModuleWithProviders {
    return <ModuleWithProviders>{
      ngModule: ThemeModule,
      providers: [
        ...NbThemeModule.forRoot({
          name: 'default'
        }).providers,
        DialogService
      ]
    };
  }
}
