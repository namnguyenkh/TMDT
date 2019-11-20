
import { BaseDTO } from './base.model';
export interface LoginPage extends BaseDTO {
  code: string;
  name: string;
}

export enum RedirectType {
  online = 'SPLASH_ONLINE',
  link = 'REDIRECT_LINK'
}

export interface ConditionAtribute {
  id: number;
  code: string;
  conditionOperators: Condition[];
  conditionConstraints: Condition[];
}

export interface Condition {
  id: number;
  code: string;
}
