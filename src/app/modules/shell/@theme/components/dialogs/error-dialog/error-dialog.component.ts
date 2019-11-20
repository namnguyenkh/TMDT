import { MessageDialogComponent } from '../base-dialog/message-dialog.component';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { TranslationService } from '../../../../../../services/translation.service';
import { Component } from '@angular/core';

@Component({
  selector: 'ngx-error-dialog',
  templateUrl: './error-dialog.component.html'
})
export class ErrorDialogComponent extends MessageDialogComponent {
  constructor(protected activeModal: NgbActiveModal, protected translateService: TranslationService) {
    super(activeModal, translateService);
  }
}
