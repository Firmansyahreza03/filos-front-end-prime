import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { bookmarkData } from "../pojo/bookmark/bookmark-data";

@Injectable({
    providedIn: 'root',
})
export class BookmarkService {
    constructor(private http: HttpClient){}

    bookmarkThread(data: string, email: string): Observable<bookmarkData> {
        return this.http.get<bookmarkData>(
            `http://localhost:3333/bookmarks/thread/${data}/user/${email}`
        );
    }
}