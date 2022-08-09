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
    
    mainUrl:string = 'http://localhost:3333/communities'

    constructor(private http: HttpClient){}

    getAllCommunity():Observable<FindAllCommunityRes>{
        return this.http.get<FindAllCommunityRes>('http://localhost:3333/communities')
    }

    
    getAll(code?:string | null, query?: string | null, startPage?: number | null, maxPage?: number | null):Observable<FindAllCommunityRes> {
        let url = this.mainUrl+"?";
        if(code){
            url = url+`code=${code}`
        }
        if(query){
            url = url+`query=${query}`
        }
        if(startPage != null && maxPage != null){
            url = url+`&startPage=${startPage}`+`&maxPage=${maxPage}`
        }
        return this.http.get<FindAllCommunityRes>(url);
    }

    insertCommunity(data:InsertCommunityReq):Observable<InsertRes>{
        return this.http.post<InsertRes>('http://localhost:3333/communities',data)
    }
    update(data : UpdateCommunityReq) : Observable<UpdateRes>{
        return this.http.put<UpdateRes>('http://localhost:3333/communities', data)
    }
    delete(id : string) : Observable<DeleteRes>{
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