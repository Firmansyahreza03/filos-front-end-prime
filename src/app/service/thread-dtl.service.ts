import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { FindAllThreadDtlRes, InsertThreadDtlReq, UpdateThreadDtlReq } from "../pojo/pojo-import";
import { DeleteRes } from "../pojo/delete-res";
import { InsertRes } from "../pojo/insert-res";
import { UpdateRes } from "../pojo/update-res";

@Injectable({
    providedIn:'root'
})
export class ThreadDtlService{
    constructor(private http: HttpClient){}

    getAll():Observable<FindAllThreadDtlRes>{
        return this.http.get<FindAllThreadDtlRes>('http://localhost:3333/thread-comments')
    }
    
    insert(data:InsertThreadDtlReq): Observable<InsertRes> {
        return this.http.post<InsertRes>("http://localhost:3333/thread-comments", data)
    }
    update(data : UpdateThreadDtlReq) : Observable<UpdateRes>{
        return this.http.put<UpdateRes>('http://localhost:3333/thread-comments', data)
    }
    delete(id : string) : Observable<DeleteRes>{
        return this.http.delete<DeleteRes>(`http://localhost:3333/thread-comments/${id}`)
    }

    findByHdrId(id : string):Observable<FindAllThreadDtlRes>{
        return this.http.get<FindAllThreadDtlRes>(`http://localhost:3333/thread-comments/threads/${id}`)
    }
}