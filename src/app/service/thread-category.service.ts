import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { FindAllThreadCategoryRes, InsertThreadCategoryReq, UpdateThreadCategoryReq } from "../pojo/pojo-import";
import { DeleteRes } from "../pojo/delete-res";
import { InsertRes } from "../pojo/insert-res";
import { UpdateRes } from "../pojo/update-res";

@Injectable({
    providedIn:'root'
})
export class ThreadCategoryService{
    constructor(private http : HttpClient){}
    
    getAllThreadCategory():Observable<FindAllThreadCategoryRes>{
        return this.http.get<FindAllThreadCategoryRes>('http://localhost:3333/thread-categories')
    }
    
    insert(data:InsertThreadCategoryReq): Observable<InsertRes> {
        return this.http.post<InsertRes>("http://localhost:3333/industries", data)
    }
    update(data : UpdateThreadCategoryReq) : Observable<UpdateRes>{
        return this.http.put<UpdateRes>('http://localhost:3333/industries', data)
    }
    delete(id : string) : Observable<DeleteRes>{
        return this.http.delete<DeleteRes>(`http://localhost:3333/industries/${id}`)
    }
}