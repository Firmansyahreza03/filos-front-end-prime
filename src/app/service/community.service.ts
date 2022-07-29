import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { InsertRes } from "../pojo/insert-res";
import { FindAllCommunityRes, InsertCommunityReq } from "../pojo/pojo-import";

@Injectable({
    providedIn:'root'
})
export class CommunityService{
    constructor(private http: HttpClient){}
    getAllCommunity():Observable<FindAllCommunityRes>{
        return this.http.get<FindAllCommunityRes>('http://localhost:3333/communities')
    }
    insertCommunity(data:InsertCommunityReq):Observable<InsertRes>{
        return this.http.post<InsertRes>('http://localhost:3333/communities',data)
    }
}