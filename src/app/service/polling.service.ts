import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { InsertPollingAnswerReq, InsertRes } from "../pojo/pojo-import";

@Injectable({
    providedIn: 'root',
})
export class PollingService {
    constructor(private http: HttpClient){}

    insertAnswer(data: InsertPollingAnswerReq): Observable<InsertRes> {
        return this.http.post<InsertRes>('http://localhost:3333/pollings/answer',data);
    }
}