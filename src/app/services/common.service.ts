import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  public readonly methods = {
    get: 'GET',
    post: 'POST',
    put: 'PUT',
    delete: 'DELETE'
  };

  static httpHeaders = new HttpHeaders();
  constructor(private readonly http: HttpClient) {}

  /**
   *
   *
   * @private
   * @returns {HttpHeaders}
   * @memberof CommonService
   */
  public buildHttpHeaders(): HttpHeaders {
    return new HttpHeaders();
    // put commom headers if any
  }

  /**
   *
   *
   * @private
   * @param {*} params
   * @returns {HttpParams}
   * @memberof CommonService
   */
  private convertHttpParams(params): HttpParams {
    let httpParams = new HttpParams();
    if (params) {
      // tslint:disable-next-line:forin
      for (const key in params) {
        const value = params[key].toString();
        if (params.hasOwnProperty(key) && value) {
          httpParams = httpParams.append(key, value);
        }
      }
    }
    return httpParams;
  }

  /**
   *
   *
   * @param {string} url
   * @param {object} [params]
   * @returns
   * @memberof CommonService
   */
  public httpGet<T>(url: string, params?: object): Observable<T> {
    const httpHeaders = this.buildHttpHeaders();
    const param = this.convertHttpParams(params);
    return this.http.get<T>(url, { headers: httpHeaders, params: param }).pipe(catchError(err => throwError(err)));
  }

  /**
   *
   *
   * @param {string} url
   * @param {*} data
   * @returns
   * @memberof CommonService
   */
  public httpPost<T>(url: string, data): Observable<T> {
    const httpHeaders = this.buildHttpHeaders();
    return this.http.post<T>(url, data || null, { headers: httpHeaders }).pipe(catchError(err => throwError(err)));
  }

  /**
   *
   *
   * @param {string} url
   * @param {*} data
   * @returns
   * @memberof CommonService
   */
  public httpPut<T>(url: string, data): Observable<T> {
    const httpHeaders = this.buildHttpHeaders();
    return this.http.put<T>(url, data || null, { headers: httpHeaders }).pipe(catchError(err => throwError(err)));
  }

  /**
   *
   *
   * @param {string} url
   * @returns
   * @memberof CommonService
   */
  public httpDelete<T>(url: string, params?: object): Observable<T> {
    const httpHeaders = new HttpHeaders();
    const param = this.convertHttpParams(params);
    return this.http.delete<T>(url, { headers: httpHeaders, params: param }).pipe(catchError(err => throwError(err)));
  }

  /**
   *
   * @param url
   * @param type
   */
  public requestDowload(url, acceptType: string = 'application/pdf') {
    const headers = this.buildHttpHeaders()
      .set('Accept', acceptType)
      .set('Access-Control-Allow-Credentials', 'true');
    return this.http.get(url, { headers: headers, responseType: 'blob' }).pipe(catchError(err => throwError(err)));
  }

  /**
   * Save key value to local store
   * @param {string} key
   * @param {string} value
   * @memberof CommonService
   */
  public saveDatatoLocal(key: string, value: string) {
    localStorage.setItem(key, value);
  }

  /**
   * get local store data by key
   * @param {string} key
   * @returns string
   * @memberof CommonService
   */
  public getDataFromLocal(key: string): string {
    return localStorage.getItem(key);
  }
}
