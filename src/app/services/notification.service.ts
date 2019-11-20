import { Injectable } from '@angular/core';
import { NbToastrService, NbComponentStatus } from '@nebular/theme';

const buildMessage = (message: string, ...args: any[]) => {
  let msg = message;
  if (args) args.forEach((t, i) => (msg = msg.replace(`{${i}}`, t)));
  return msg;
};

@Injectable()
export class NotificationService {
  constructor(private readonly nbToastService: NbToastrService) {}

  /**
   * Show message as success type
   * @param message Message content
   * @param title Message title
   * @param args Message arguments
   */
  public showSuccess(message = '', title = 'SUCCESS', ...args: any[]) {
    const msg = buildMessage(message, args);
    this.nbToastService.success(msg, title, {});
  }

  /**
   * Show message as error type
   * @param message Message content
   * @param title Message title
   * @param args Message arguments
   */
  public showError(message = '', title = 'ERROR', ...args: any[]) {
    const msg = buildMessage(message, args);
    this.nbToastService.danger(msg, title, {});
  }

  /**
   * Show message as warning type
   * @param message Message content
   * @param title Message title
   * @param args Message arguments
   */
  public showWarning(message = '', title = 'WARNING', ...args: any[]) {
    const msg = buildMessage(message, args);
    this.nbToastService.warning(msg, title, {});
  }

  /**
   * Show message as info type
   * @param message Message content
   * @param title Message title
   * @param args Message arguments
   */
  public showInfo(message = '', title = 'INFO', ...args: any[]) {
    const msg = buildMessage(message, args);
    this.nbToastService.info(msg, title, {});
  }

  /**
   * Show message as primary type
   * @param message Message content
   * @param title Message title
   * @param args Message arguments
   */
  public showPrimary(message = '', title = '', ...args: any[]) {
    const msg = buildMessage(message, args);
    this.nbToastService.primary(msg, title, {});
  }

  /**
   * Show messager default
   */
  public showDefaultError() {
    this.nbToastService.danger('Oops! Something went wrong.');
  }

  /**
   * Show messager Error API
   * @param err
   */
  public showAPIError(err) {
    if (!!err && !!err.error && !!err.error.message) {
      this.showError(err.error.message);
    } else {
      this.showDefaultError();
    }
  }
}
