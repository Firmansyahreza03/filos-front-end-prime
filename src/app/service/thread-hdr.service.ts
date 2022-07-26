import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { InsertRes } from "../pojo/insert-res";
import { FindAllThreadHdrRes, InsertThreadHdrReq } from "../pojo/pojo-import";

@Injectable({
    providedIn:'root'
})
export class ThreadHdrService{
constructor(private http: HttpClient){}
getAllThreadHdr():Observable<FindAllThreadHdrRes>{
    return this.http.get<FindAllThreadHdrRes>('http://localhost:3333/threads')
}

insertThreadHdr(data:InsertThreadHdrReq):Observable<InsertRes>{
    return this.http.post<InsertRes>('http://localhost:3333/threads',data)
}
}