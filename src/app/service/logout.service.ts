import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { LogoutReq } from "../pojo/logout/logout-req";
import { LogoutRes } from "../pojo/pojo-import";

@Injectable({
    providedIn:'root'
})
export class LogoutService{
    constructor(private http:HttpClient){}

    deleteRefreshToken(id: string):void{
        this.http.delete(`http://localhost:3333/logout/${id}`);
    }

    updateUserLogged(data: LogoutReq):Observable<LogoutRes>{
        return this.http.patch<LogoutRes>("http://localhost:3333/logout",data);
    }
}
