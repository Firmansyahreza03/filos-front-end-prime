import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { InsertRes } from "../pojo/insert-res";
import { FindAllThreadHdrRes, FindThreadHdrRes, InsertPollingHeaderReq, InsertThreadHdrReq } from "../pojo/pojo-import";

@Injectable({
  providedIn: 'root'
})
export class ThreadHdrService {
  constructor(private http: HttpClient) {}
  
  getAllThreadHdr(startPage?: number, maxPage?: number, query?: string): Observable < FindAllThreadHdrRes > {
    let url = 'http://localhost:3333/threads?'
     if(startPage != undefined && maxPage){
        url = url+`&startPage=${startPage}`+`&maxPage=${maxPage}`
    }
    if(query ){
        url = url+`&query=${query}`
    }
    return this.http.get < FindAllThreadHdrRes > (url);
  }

  getAllThreadHdrByUserLogged(data: string): Observable < FindAllThreadHdrRes > {
    return this.http.get < FindAllThreadHdrRes > ('http://localhost:3333/threads/users/' + data)
  }

  insertThreadHdr(data: InsertThreadHdrReq): Observable < InsertRes > {
    return this.http.post < InsertRes > ('http://localhost:3333/threads', data);
  }

  getThreadThatAreLikedByUser(email: string): Observable<FindAllThreadHdrRes> {
    return this.http.get<FindAllThreadHdrRes>(`http://localhost:3333/threads/user-like/${email}`);
  }

  getThreadThatAreBookmarkedByUser(email: string): Observable<FindAllThreadHdrRes> {
    return this.http.get<FindAllThreadHdrRes>(`http://localhost:3333/threads/user-bookmark/${email}`);
  }
  
  findThreadHdrById(id:string):Observable<FindThreadHdrRes>{
    return this.http.get<FindThreadHdrRes>(`http://localhost:3333/threads/${id}`)
  }
}
