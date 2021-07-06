import { Injectable } from '@angular/core';
import { environment as config } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { throwError, Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable()
export class BaseService {
  OBJECT_ERR = {
    'code': 400,
    'message': 'Please Check Your Internet Connection And Try Again'
  }
  constructor(
    protected http: HttpClient
  ) { }

  private getUrlApi() {
    return config.hostServer;
  }

  getHeader(headerPairs?: any) {
    const httpOptions = {
      headers: new HttpHeaders()
    };
    let user = JSON.parse(localStorage.getItem('user_info'));
    if (user) {
      const token = localStorage.getItem('auth-token');
      httpOptions.headers = httpOptions.headers.set('auth-token', token);
      httpOptions.headers = httpOptions.headers.set('locale', localStorage.getItem('locale'));
      httpOptions.headers = httpOptions.headers.set('Content-Type', 'application/json');
    }
    if (headerPairs) {
      headerPairs.forEach(element => {
        httpOptions.headers = httpOptions.headers.set(element.key, element.value);
      });
    }
    return httpOptions;
  }

  getError(err?) {
    return throwError({ http_status: err.status, errors: err.error });
  }

  protected getData(path?: string): Observable<any> {
    let options = this.getHeader();
    return this.http.get(`${this.getUrlApi()}/${path}`, options)
      .pipe(
        map(res => {
          return res
        }),
        catchError(err => this.getError(err))
      );
  }

  protected postData(path?: string, body?: any, headerPairs?: any): Observable<any> {
    let options = this.getHeader();
    return this.http.post(`${this.getUrlApi()}/${path}`, body, options)
      .pipe(
        map(res => {
          return res
        }),
        catchError(err => this.getError(err))
      )
  }

  protected putData(path?: string, body?: any, headersPairs?: any): Observable<any> {
    let options = this.getHeader(headersPairs);
    return this.http.put(`${this.getUrlApi()}/${path}`, body, options)
      .pipe(
        map(res => {
          return res
        }),
        catchError(err => this.getError(err))
      );
  }

  protected delete(path?, headersPairs?: any) {
    let options = this.getHeader(headersPairs);
    return this.http.delete(`${this.getUrlApi()}/${path}`, options)
      .pipe(
        map(res => {
          return res
        }),
        catchError(err => this.getError(err))
      )
  }

}
