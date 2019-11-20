import { Injectable } from '@angular/core';
import { CommonService } from './common.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class loginPageService {
  constructor(private readonly http: HttpClient, private readonly commonService: CommonService) {}

  /**
   * get list splash
   * @returns {Observable<Object>}
   * @memberof loginPageService
   */
  public getListSplash(): Observable<Object> {
    const url = `/api/splash/all`;
    return this.commonService.httpGet(url);
  }

  /**
   * get list welcome page
   * @returns {Observable<Object>}
   * @memberof loginPageService
   */
  public getListWelcomePage(): Observable<Object> {
    const url = `/api/welcome-page/all`;
    return this.commonService.httpGet(url);
  }

  public getListDevice(): Observable<Object> {
    const url = `/api/device/all`;
    return this.commonService.httpGet(url);
  }

  public createLoginPage(body): Observable<Object> {
    const url = `/api/login-page/create`;
    return this.commonService.httpPost(url, body);
  }

  public getConditionAttributes(): Observable<Object> {
    const url = `/api/condition-attributes`;
    return this.commonService.httpGet(url);
  }
}
