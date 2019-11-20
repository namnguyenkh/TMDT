import { Injectable } from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { MessageDialogInfo } from '../modules/shell/@theme/components/dialogs/dialog-info/message-dialog-info';
// tslint:disable-next-line:max-line-length
import { MessageDialogComponent } from '../modules/shell/@theme/components/dialogs/base-dialog/message-dialog.component';
import { MessageType } from '../modules/shell/@theme/components/dialogs/dialog-info/message-type';
import { ErrorDialogComponent } from '../modules/shell/@theme/components/dialogs/error-dialog/error-dialog.component';
// tslint:disable-next-line:max-line-length
import { ConfirmationDialogComponent } from '../modules/shell/@theme/components/dialogs/confirmation-dialog/confirmation-dialog.component';
// tslint:disable-next-line:max-line-length
import { GenericDialogComponent } from '../modules/shell/@theme/components/dialogs/base-dialog/generic-dialog.component';
import { GenericDialogInfo } from '../modules/shell/@theme/components/dialogs/dialog-info/generic-dialog-info';

@Injectable()
export class DialogService {
  constructor(private readonly dialogService: NgbModal) {}

  showMessage(messageInfo: MessageDialogInfo) {
    let modal: NgbModalRef;
    let instance: MessageDialogComponent;

    switch (messageInfo.msgType) {
      case MessageType.ERROR:
        modal = this.dialogService.open(ErrorDialogComponent, messageInfo.modalOptions);
        break;
      case MessageType.CONFIRMATION:
        modal = this.dialogService.open(ConfirmationDialogComponent, messageInfo.modalOptions);
        break;
    }

    instance = <MessageDialogComponent>modal.componentInstance;
    instance.title = messageInfo.title;
    instance.message = messageInfo.message;
    instance.onClose = result => {
      if (result && messageInfo.onOK) {
        messageInfo.onOK();
        return;
      }

      if (!result && messageInfo.onCancel) {
        messageInfo.onCancel();
        return;
      }
    };
  }

  /**
   * Open popup dialog
   * @param dialogInfo
   */
  openDialog<T extends GenericDialogComponent<TIn, TOut>, TIn, TOut>(dialogInfo: GenericDialogInfo<T, TIn, TOut>) {
    const modal = this.dialogService.open(dialogInfo.dialogType, dialogInfo.modalOptions);
    const instance = <T>modal.componentInstance;
    instance.inData = dialogInfo.inData;
    instance.onOK = dialogInfo.onOK;
    instance.onCancel = dialogInfo.onCancel;
    instance.extractRelatedInfo(dialogInfo);
  }
}
