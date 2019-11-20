import { BaseDialogInfo } from './base-dialog-info';
import { Type } from '@angular/core';
import { GenericDialogComponent } from '../base-dialog/generic-dialog.component';

export class GenericDialogInfo<T extends GenericDialogComponent<TIn, TOut>, TIn, TOut> extends BaseDialogInfo {
  inData: TIn;
  dialogType: Type<T>;
  onOK: (outData: TOut) => void;
}
