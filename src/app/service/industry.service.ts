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

    getAllIndustry( startPage?: number, maxPage?: number, query?: string): Observable<FindAllIndustryRes> {
        let urlAPI = `http://localhost:3333/industries?`;
        if(startPage != undefined && maxPage){
            urlAPI = urlAPI+`&startPage=${startPage}`+`&maxPage=${maxPage}`
        }
        if(query ){
            urlAPI = urlAPI+`&query=${query}`
        }
        return this.http.get<FindAllIndustryRes>(urlAPI);
    }
    insert(data:InsertIndustryReq): Observable<InsertRes> {
        return this.http.post<InsertRes>("http://localhost:3333/industries", data)
    }
    update(data : UpdateIndustryReq) : Observable<UpdateRes>{
        return this.http.put<UpdateRes>('http://localhost:3333/industries', data)
    }
    delete(id : string) : Observable<DeleteRes>{
        return this.http.delete<DeleteRes>(`http://localhost:3333/industries/${id}`)
    }

}