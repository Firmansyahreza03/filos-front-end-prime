import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { DeleteRes } from "../pojo/delete-res";
import { InsertRes } from "../pojo/insert-res";
import { FindAllCommunityCategoryRes, InsertCommunityCategoryReq, UpdateCommunityCategoryReq } from "../pojo/pojo-import";
import { UpdateRes } from "../pojo/update-res";

@Injectable({
    providedIn:'root'
})
export class CommunityCategoriesService{
    constructor(private http: HttpClient){}

    getAllCommunityCategory():Observable<FindAllCommunityCategoryRes>{
        return this.http.get<FindAllCommunityCategoryRes>('http://localhost:3333/community-categories')
    }
    
    insert(data:InsertCommunityCategoryReq): Observable<InsertRes> {
        return this.http.post<InsertRes>("http://localhost:3333/community-categories", data)
    }
    update(data : UpdateCommunityCategoryReq) : Observable<UpdateRes>{
        return this.http.put<UpdateRes>('http://localhost:3333/community-categories', data)
    }
    delete(id : number) : Observable<DeleteRes>{
        return this.http.delete<DeleteRes>(`http://localhost:3333/community-categories/${id}`)
    }
}