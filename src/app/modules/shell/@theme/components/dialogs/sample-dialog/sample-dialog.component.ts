import { EditableDialogComponent } from '../base-dialog/editable-dialog.component';
import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { DialogService } from '../../../../../../services/dialog.service';
import { TranslationService } from '../../../../../../services/translation.service';
import { SampleDialogInfo } from './sample-dialog-info';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'cwm-sample-edit',
  templateUrl: './sample-dialog.component.html'
})
export class SampleDialogComponent extends EditableDialogComponent<any> implements OnInit {
  sampleForm: FormGroup;
  constructor(
    protected activeModal: NgbActiveModal,
    protected dialogService: DialogService,
    protected translate: TranslationService
  ) {
    super(activeModal, dialogService, translate);
  }

  ngOnInit() {
    this.title = 'Sample dialog';
    this.inData = { sample: 'Hello world' };
    this.initForm();
  }

  initForm() {
    this.sampleForm = new FormGroup({});
  }

  extractRelatedInfo(dialogInfo: SampleDialogInfo) {
    this.editMode = dialogInfo.editMode;
  }

  submitCommand(form: FormGroup) {
    this.onOK('New value');
    this.closeCommand();
  }
}
