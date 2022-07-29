import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { FindAllCommunityCategoryRes } from "../pojo/pojo-import";

@Injectable({
    providedIn:'root'
})
export class CommunityCategoriesService{
    constructor(private http: HttpClient){}

    getAllCommunityCategory():Observable<FindAllCommunityCategoryRes>{
        return this.http.get<FindAllCommunityCategoryRes>('http://localhost:3333/community-categories')
    }
}