import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { LoginRes } from "../pojo/pojo-import";

@Injectable({
    providedIn: 'root'
})
export class RefreshTokenService{

    constructor(private http: HttpClient){}

    validateRefreshToken(token: string): Observable<LoginRes> {
        return this.http.post<LoginRes>('http://localhost:3333/refresh-token',token);
    }
}