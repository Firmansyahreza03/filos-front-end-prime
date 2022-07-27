import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { FindProfileRes } from "../pojo/pojo-import";

@Injectable({
    providedIn:'root'
})
export class ProfileService{
    constructor(private http: HttpClient){}
    getProfileByEmail(data: string):Observable<FindProfileRes>{
        return this.http.get<FindProfileRes>('http://localhost:3333/users/email'+ data)
    }
    // getProfileBy

}