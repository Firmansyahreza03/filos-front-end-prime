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

    
    getAll(startPage?: number, maxPage?: number, query?: string, code?:string):Observable<FindAllCommunityRes> {
        let url = this.mainUrl+"?";
        if(startPage != undefined && maxPage){
            console.log(startPage)
            console.log(maxPage)
            url = url+`&startPage=${startPage}`+`&maxPage=${maxPage}`
        }
        if(query){
            url = url+`&query=${query}`
        }
        if(code){
            url = url+`&code=${code}`
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