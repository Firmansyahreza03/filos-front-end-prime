import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { DeleteRes } from "../pojo/delete-res";
import { InsertRes } from "../pojo/insert-res";
import { UpdateRes } from "../pojo/update-res";
import { FindAllIndustryRes, FindIndustryRes, InsertIndustryReq, UpdateIndustryReq } from "../pojo/pojo-import";

@Injectable({
    providedIn: 'root'
})
export class IndustryService {
    constructor(private http: HttpClient) { }

    findById(id : number) : Observable<FindIndustryRes>{
        return this.http.get<FindIndustryRes>(`http://localhost:3333/industries/${id}`)
    }
    getAllIndustry(): Observable<FindAllIndustryRes> {
        return this.http.get<FindAllIndustryRes>('http://localhost:3333/industries')
    }
    insert(data:InsertIndustryReq): Observable<InsertRes> {
        return this.http.post<InsertRes>("http://localhost:3333/industries", data)
    }
    delete(id : number) : Observable<DeleteRes>{
        return this.http.delete<DeleteRes>(`http://localhost:3333/industries/${id}`)
    }
    update(data : UpdateIndustryReq) : Observable<UpdateRes>{
        return this.http.put<UpdateRes>('http://localhost:3333/industries', data)
    }

}