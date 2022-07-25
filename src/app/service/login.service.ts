import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { LoginReq, LoginRes } from "../pojo/pojo-import";

@Injectable({
    providedIn: 'root'
})

export class LoginService {

    constructor(private http: HttpClient){}

    login(data: LoginReq): Observable<LoginRes>{
        return this.http.post<LoginRes>('http://localhost:3333/login', data)
    }

    saveData(data: LoginRes): void {
        localStorage.setItem('data', JSON.stringify(data))
    }

    getData(): LoginRes | null {
        const data = localStorage.getItem('data')
        if(data){
            return JSON.parse(data)
        }
        return null
    }

    getLoggedUsername(): string | null {
        const token = this.getData()?.data.username;
        if (token) return token;
        return null;
    }

    getLoggedRole(): string | null {
        const token = this.getData()?.data.roleCode;
        if (token) return token;
        return null;
    }

    getToken(): string | null {
        const token = this.getData()?.data.token;
        if (token) return token;
        return null;
    }
    
    clearData() : void {
        localStorage.clear()
    }
}