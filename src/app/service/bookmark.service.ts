import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { BookmarkData } from "../pojo/bookmark/bookmark-data";

@Injectable({
    providedIn: 'root',
})
export class BookmarkService {
    constructor(private http: HttpClient){}

    bookmarkThread(data: string, email: string): Observable<BookmarkData> {
        return this.http.get<BookmarkData>(
            `http://localhost:3333/bookmarks/thread/${data}/user/${email}`
        );
    }
}