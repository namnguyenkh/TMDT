import { BaseDialogInfo } from './base-dialog-info';
import { MessageType } from './message-type';

export class MessageDialogInfo extends BaseDialogInfo {
  message: string;
  msgType: number;
  onOK: () => void;

  /**
   *Creates an instance of MessageInfo.
   * @memberof MessageInfo
   */
  constructor() {
    super();
    this.msgType = MessageType.ERROR;
    this.onOK = null;
    this.modalOptions.size = 'sm';
    this.modalOptions.windowClass = 'md-modal';
  }
}
