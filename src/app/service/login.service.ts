import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AppConfig } from '../api/appconfig';
import { LoginReq, LoginRes } from '../pojo/pojo-import';

@Injectable({
  providedIn: 'root',
})
export class LoginService {

  constructor(private http: HttpClient) {}

  login(data: LoginReq): Observable<LoginRes> {
    return this.http.post<LoginRes>('http://localhost:3333/login', data);
  }

  saveData(data: LoginRes): void {
    localStorage.setItem('data', JSON.stringify(data));
  }

  getData(): LoginRes | null {
    const data = localStorage.getItem('data');
    if (data) {
      return JSON.parse(data);
    }
    return null;
  }

  getLoggedEmail(): string | null {
    const data = this.getData()?.data.email;
    if (data) return data;
    return null;
  }

  getLoggedRole(): string | null {
    const data = this.getData()?.data.roleCode;
    if (data) return data;
    return null;
  }

  getToken(): string | null {
    const data = this.getData()?.data.token;
    if (data) return data;
    return null;
  }

  isLogin(): boolean {
    const res: boolean = this.getData() ? true : false;
    return res;
  }

  getRefreshToken(): string | null {
    const data = this.getData()?.data.refreshToken;
    if(data) return data;
    return null;
  }
}
