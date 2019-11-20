export interface LoginContext {
  username: string;
  password: string;
  remember?: boolean;
}

export interface Principal {
  sessionId: string;
  username: string;
  firstName: string;
  lastName: string;
  displayName: string;
  mail?: string;
  groups?: any[];
  permissions?: any[];
}
