/*
 * This module imports and re-exports all Angular Material modules for convenience,
 * so only 1 module import is needed in your feature modules.
 * See https://material.angular.io/guide/getting-started#step-3-import-the-component-modules.
 *
 * To optimize your production builds, you should only import the components used in your app.
 */
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { UsageBytePipe, UsageSortPipe, DdmmyyPipe } from '../../pipes';
import { TranslateModule } from '@ngx-translate/core';
import { TranslationService } from '../../services/translation.service';
import { CkEditorComponent } from './common/ck-editor/ck-editor.component';
import { AngularEditorModule } from '@kolkov/angular-editor';

@NgModule({
  imports: [CommonModule, FormsModule, AngularEditorModule],
  exports: [
    CommonModule,
    FormsModule,
    AngularEditorModule,
    CkEditorComponent,
    UsageBytePipe,
    TranslateModule,
    UsageSortPipe,
    DdmmyyPipe
  ],
  providers: [TranslationService],
  declarations: [UsageBytePipe, UsageSortPipe, DdmmyyPipe, CkEditorComponent]
})
export class SharedModule {}
