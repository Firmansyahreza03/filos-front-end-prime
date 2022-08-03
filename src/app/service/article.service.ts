import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { DeleteRes } from "../pojo/delete-res";
import { InsertRes } from "../pojo/insert-res";
import { FindAllArticleRes, FindArticleRes, InsertArticleReq, UpdateArticleReq } from "../pojo/pojo-import";
import { UpdateRes } from "../pojo/update-res";

@Injectable({
    providedIn:'root'
})
export class ArticleService{
    constructor(private http: HttpClient){}

    findById(id : string) : Observable<FindArticleRes>{
        return this.http.get<FindArticleRes>(`http://localhost:3333/articles/${id}`)
    }

    getAll( startPage?: number, maxPage?: number, query?: string): Observable<FindAllArticleRes> {
        let urlAPI = `http://localhost:3333/articles?`;
        if(startPage != undefined && maxPage){
            console.log(startPage)
            console.log(maxPage)
            urlAPI = urlAPI+`&startPage=${startPage}`+`&maxPage=${maxPage}`
        }
        if(query ){
            urlAPI = urlAPI+`&query=${query}`
        }
        return this.http.get<FindAllArticleRes>(urlAPI);
    }

    insert(data:InsertArticleReq): Observable<InsertRes> {
        return this.http.post<InsertRes>("http://localhost:3333/articles", data)
    }
    update(data : UpdateArticleReq) : Observable<UpdateRes>{
        return this.http.put<UpdateRes>('http://localhost:3333/articles', data)
    }
    delete(id : string) : Observable<DeleteRes>{
        return this.http.delete<DeleteRes>(`http://localhost:3333/articles/${id}`)
    }
}