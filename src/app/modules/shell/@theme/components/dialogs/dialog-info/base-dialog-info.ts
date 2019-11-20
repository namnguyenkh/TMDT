import { NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';

export abstract class BaseDialogInfo {
  title: string;
  onCancel: () => void;
  modalOptions: NgbModalOptions;

  /**
   *Creates an instance of BaseDialogInfo.
   * @memberof BaseDialogInfo
   */
  constructor() {
    this.onCancel = null;
    this.modalOptions = { backdrop: true, centered: true, size: 'lg' };
  }
}
