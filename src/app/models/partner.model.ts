import { BaseDTO } from './base.model';

export class Partner extends BaseDTO {
  constructor(
    public companyName?: string,
    public contractNo?: string,
    public startDate?: any,
    public address?: string
  ) {
    super();
  }
}
