import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { FindAllThreadCategoryRes } from "../pojo/pojo-import";

@Injectable({
    providedIn:'root'
})
export class ThreadCategoryService{
    constructor(private http : HttpClient){}
    
    getAllThreadCategory():Observable<FindAllThreadCategoryRes>{
        return this.http.get<FindAllThreadCategoryRes>('http://localhost:3333/thread-categories')
    }
}