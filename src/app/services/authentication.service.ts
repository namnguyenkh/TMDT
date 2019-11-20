import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, Subject } from 'rxjs';
import { throwError } from 'rxjs';
import { catchError, finalize } from 'rxjs/operators';
import { LoginContext, Principal } from '../models/authentication.model';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

/**
 * Key determine 'credential' in cache/local storage.
 */
const credentialsKey = 'credentials';

/**
 * Provides a base for authentication workflow.
 * The Credentials interface as well as login/logout methods should be replaced with proper implementation.
 */
@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private _credentials: Principal | null;
  authChanged$ = new Subject();

  constructor(
    private readonly http: HttpClient,
    private readonly router: Router,
    private readonly translateService: TranslateService
  ) {
    const savedCredentials = localStorage.getItem(credentialsKey);
    if (savedCredentials) {
      this._credentials = JSON.parse(savedCredentials);
    }
  }

  /**
   * Authenticates the user.
   * @param context The login parameters.
   */
  login(context: LoginContext) {
    const tmpHeader = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });
    const body = `username=${context.username}&password=${context.password}`;
    return this.http.post('login', body, { headers: tmpHeader }).pipe(
      catchError((response: HttpErrorResponse) => {
        return throwError(response);
      }),
      finalize(() => {})
    );
  }

  /**
   * return this.http.post('logout', message).subscribe(res => { });
   * Clear
   * @param message
   */
  clearSession(message?: string) {
    this.setCredentials();
    return of(true);
  }

  /**
   * Logs out the user and clear credentials.
   */
  logout(): Observable<boolean> {
    this.clearSession('Logout success!!!');
    return of(true);
  }
  /**
   * Checks is the user is authenticated.
   */
  isAuthenticated(): boolean {
    const credentials = localStorage.getItem(credentialsKey);
    if (!credentials) {
      this.clearSession();
    }
    return !!credentials;
  }
  /**
   * Gets the user credentials.
   */
  get credentials(): Principal | null {
    return this._credentials;
  }

  /**
   * Sets the user credentials.
   * @param credentials The user credentials.
   * @param remember True to remember credentials across sessions.
   */
  setCredentials(credentials?: any) {
    this._credentials = credentials || null;
    if (credentials) {
      localStorage.setItem(credentialsKey, JSON.stringify(credentials));
      this.authChanged$.next();
    } else {
      localStorage.removeItem(credentialsKey);
    }
  }

  loadPrincipal() {
    this.http.get('/api/users/principal').subscribe((res: Principal) => {
      this.setCredentials(res);
    });
  }

  public getGroupCode() {
    if ( this._credentials && this._credentials.groups) {
      return [...this._credentials.groups];
    }
    return [];
  }
}
