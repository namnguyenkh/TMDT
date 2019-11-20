import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { TranslationService } from '../../../../../../services/translation.service';
import { MessageDialogComponent } from '../base-dialog/message-dialog.component';

@Component({
  selector: 'ngx-confirmation-dialog',
  templateUrl: './confirmation-dialog.component.html'
})
export class ConfirmationDialogComponent extends MessageDialogComponent {
  constructor(protected activeModal: NgbActiveModal, protected translate: TranslationService) {
    super(activeModal, translate);
  }
}
