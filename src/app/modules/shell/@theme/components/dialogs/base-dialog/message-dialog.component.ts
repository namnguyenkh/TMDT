import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { BaseDialogComponent } from './base-dialog.component';
import { TranslationService } from '../../../../../../services/translation.service';

export abstract class MessageDialogComponent extends BaseDialogComponent {
  message: string;
  onClose: (result) => void;

  constructor(protected activeModal: NgbActiveModal, protected translateService: TranslationService) {
    super(activeModal, translateService);
  }

  closeCommand(result: boolean) {
    this.activeModal.close(result);
    if (this.onClose) {
      this.onClose(result);
    }
  }
}
