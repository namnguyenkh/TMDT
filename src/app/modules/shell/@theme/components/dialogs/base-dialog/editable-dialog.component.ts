import { DialogService } from '../../../../../../services/dialog.service';
import { GenericDialogComponent } from './generic-dialog.component';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { TranslationService } from '../../../../../../services/translation.service';

export abstract class EditableDialogComponent<TDto> extends GenericDialogComponent<TDto, TDto> {
  editMode: number;

  /**
   *Creates an instance of EditableDialogComponent.
   * @param {NgbActiveModal} activeModal
   * @param {DialogService} dialogService
   * @param {TranslateService} translate
   * @param {LoggerService} loggerService
   * @memberof EditableDialogComponent
   */
  constructor(
    protected activeModal: NgbActiveModal,
    protected dialogService: DialogService,
    protected translate: TranslationService
  ) {
    super(activeModal, dialogService, translate);
  }
}
