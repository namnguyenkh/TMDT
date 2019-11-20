import { EditableDialogInfo } from '../dialog-info/editable-dialog-info';
import { SampleDialogComponent } from './sample-dialog.component';

export class SampleDialogInfo extends EditableDialogInfo<SampleDialogComponent, any> {
  constructor() {
    super();
    this.modalOptions = { backdrop: true, centered: true };
    this.modalOptions.windowClass = 'md-modal';
    this.modalOptions.size = 'xl';
  }
}
