import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { DeleteRes } from "../pojo/delete-res";
import { InsertRes } from "../pojo/insert-res";
import { FindAllCommunityRes, FindCommunityRes, InsertCommunityReq, UpdateCommunityReq } from "../pojo/pojo-import";
import { UpdateRes } from "../pojo/update-res";

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
    update(data : UpdateCommunityReq) : Observable<UpdateRes>{
        return this.http.put<UpdateRes>('http://localhost:3333/communities', data)
    }
    delete(id : number) : Observable<DeleteRes>{
        return this.http.delete<DeleteRes>(`http://localhost:3333/communities/${id}`)
    }
    getCommunityById(id: string): Observable<FindCommunityRes>{
        return this.http.get<FindCommunityRes>(`http://localhost:3333/communities/${id}`)
    }
    getByIndustryAndCategory(email: string, code: string, startPage: number, maxPage: number): Observable<FindAllCommunityRes>{
        if(!startPage && !maxPage){
            return this.http.get<FindAllCommunityRes>(`http://localhost:3333/communities/categories/${code}/industries/${email}`)
        } else {
            return this.http.get<FindAllCommunityRes>(`http://localhost:3333/communities/categories/${code}/industries/${email}?startPage=${startPage}&maxPage=${maxPage}`)
        }
    }
}