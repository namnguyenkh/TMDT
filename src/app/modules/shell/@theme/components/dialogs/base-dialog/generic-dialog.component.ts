import { BaseDialogComponent } from './base-dialog.component';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { TranslationService } from '../../../../../../services/translation.service';
import { GenericDialogInfo } from '../dialog-info/generic-dialog-info';
import { DialogService } from '../../../../../../services/dialog.service';

export abstract class GenericDialogComponent<TIn, TOut> extends BaseDialogComponent {
  inData: TIn;
  onOK: (outData: TOut) => void;
  onCancel: () => void;

  constructor(
    protected activeModal: NgbActiveModal,
    protected dialogService: DialogService,
    protected translate: TranslationService
  ) {
    super(activeModal, translate);
  }

  /**
   * Dismiss the dialog with reason
   */
  dismissCommand() {
    this.activeModal.dismiss();
  }

  /**
   * Close the dialog
   */
  closeCommand() {
    this.activeModal.close();
  }

  abstract extractRelatedInfo(dialogInfo: GenericDialogInfo<GenericDialogComponent<TIn, TOut>, TIn, TOut>);
}
