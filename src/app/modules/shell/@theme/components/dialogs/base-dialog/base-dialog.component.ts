import { BaseComponent } from '../../base.component';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { TranslationService } from '../../../../../../services/translation.service';

export abstract class BaseDialogComponent extends BaseComponent {
  title: string;

  constructor(protected activeModal: NgbActiveModal, protected translateService: TranslationService) {
    super(translateService);
    this.title = '';
  }
}
