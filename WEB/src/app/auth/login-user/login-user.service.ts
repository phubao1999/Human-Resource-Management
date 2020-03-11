import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment as config } from 'src/environments/environment';

@Injectable()
export class LoginUserService {

  constructor(
    private http: HttpClient
  ) { }

  login(body) {
    return this.http.post(`${config.hostServer}/login`, body);
  }
}
