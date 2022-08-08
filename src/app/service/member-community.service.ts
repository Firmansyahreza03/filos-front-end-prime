import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { DeleteRes } from "../pojo/delete-res";
import { InsertRes } from "../pojo/insert-res";
import { UpdateRes } from "../pojo/update-res";
import { FindAllMemberCommunityRes, FindMemberCommunityRes, InsertMemberCommunityReq, UpdateMemberCommunityReq } from "../pojo/pojo-import";

@Injectable({
    providedIn: 'root'
})
export class MemberCommunityService {
    constructor(private http: HttpClient) { }

    findById(id : string) : Observable<FindMemberCommunityRes>{
        return this.http.get<FindMemberCommunityRes>(`http://localhost:3333/community-members/${id}`)
    }

    getAllIndustry( startPage?: number, maxPage?: number, query?: string): Observable<FindAllMemberCommunityRes> {
        let urlAPI = `http://localhost:3333/community-members?`;
        if(startPage != undefined && maxPage){
            urlAPI = urlAPI+`&startPage=${startPage}`+`&maxPage=${maxPage}`
        }
        if(query ){
            urlAPI = urlAPI+`&query=${query}`
        }
        return this.http.get<FindAllMemberCommunityRes>(urlAPI);
    }

    insert(data:InsertMemberCommunityReq): Observable<InsertRes> {
        return this.http.post<InsertRes>("http://localhost:3333/community-members", data)
    }
    update(data : UpdateMemberCommunityReq) : Observable<UpdateRes>{
        return this.http.put<UpdateRes>('http://localhost:3333/community-members', data)
    }
    delete(id : string) : Observable<DeleteRes>{
        return this.http.delete<DeleteRes>(`http://localhost:3333/community-members/${id}`)
    }

}