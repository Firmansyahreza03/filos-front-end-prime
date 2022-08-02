import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { DeleteRes } from "../pojo/delete-res";
import { InsertRes } from "../pojo/insert-res";
import { FindAllProfileRes, FindProfileRes, InsertProfileReq, UpdateProfileReq } from "../pojo/pojo-import";
import { UpdateRes } from "../pojo/update-res";

@Injectable({
    providedIn:'root'
})
export class UserService{
    constructor(private http: HttpClient){}

    findByEmail(data: string):Observable<FindProfileRes>{
        return this.http.get<FindProfileRes>('http://localhost:3333/users/email/'+ data)
    }

    findById(id : string) : Observable<FindProfileRes>{
        return this.http.get<FindProfileRes>(`http://localhost:3333/users/${id}`)
    }

    getAll( startPage?: number, maxPage?: number, query?: string): Observable<FindAllProfileRes> {
        let urlAPI = `http://localhost:3333/users?`;
        if(startPage != undefined && maxPage){
            console.log(startPage)
            console.log(maxPage)
            urlAPI = urlAPI+`&startPage=${startPage}`+`&maxPage=${maxPage}`
        }
        if(query ){
            urlAPI = urlAPI+`&query=${query}`
        }
        return this.http.get<FindAllProfileRes>(urlAPI);
    }

    insert(data:InsertProfileReq): Observable<InsertRes> {
        return this.http.post<InsertRes>("http://localhost:3333/users", data)
    }
    update(data : UpdateProfileReq) : Observable<UpdateRes>{
        return this.http.put<UpdateRes>('http://localhost:3333/users', data)
    }
    delete(id : string) : Observable<DeleteRes>{
        return this.http.delete<DeleteRes>(`http://localhost:3333/users/${id}`)
    }
}