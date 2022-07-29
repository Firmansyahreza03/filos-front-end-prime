import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { InsertRes } from "../pojo/insert-res";
import { FindAllCommunityRes, FindCommunityRes, InsertCommunityRes } from "../pojo/pojo-import";

@Injectable({
    providedIn:'root'
})
export class CommunityService{
    constructor(private http: HttpClient){}
    getAllCommunity():Observable<FindAllCommunityRes>{
        return this.http.get<FindAllCommunityRes>('http://localhost:3333/communities')
    }
    getCommunityById(id:string):Observable<FindCommunityRes>{
        return this.http.get<FindCommunityRes>('http://localhost:3333/communities/'+id)
    }
    insertCommunity(data:InsertCommunityRes):Observable<InsertRes>{
        return this.http.post<InsertRes>('http://localhost:3333/communities',data)
    }
}