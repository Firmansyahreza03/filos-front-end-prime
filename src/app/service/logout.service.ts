import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { LogoutReq } from "../pojo/logout/logout-req";

@Injectable({
    providedIn:'root'
})
export class LogoutService{
    constructor(private http:HttpClient){}

    deleteRefreshToken(id: string):void{
        this.http.delete(`http://localhost:3333/logout/${id}`);
    }

    updateUserLogged(data: LogoutReq):void{
        this.http.patch("http://localhost:3333/logout",data);
    }
}
