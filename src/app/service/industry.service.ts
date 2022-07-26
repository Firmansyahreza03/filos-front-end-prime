import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { FindAllIndustryRes } from "../pojo/pojo-import";

@Injectable({
    providedIn: 'root'
})
export class IndustryService {
    constructor(private http: HttpClient) { }
    getAllIndustry(): Observable<FindAllIndustryRes> {
        return this.http.get<FindAllIndustryRes>('http://localhost:3333/industries')
    }

}