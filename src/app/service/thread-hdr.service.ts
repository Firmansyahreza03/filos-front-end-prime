import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { InsertRes } from "../pojo/insert-res";
import { FindAllThreadHdrRes, FindThreadHdrRes, InsertThreadHdrReq } from "../pojo/pojo-import";

@Injectable({
  providedIn: 'root'
})
export class ThreadHdrService {
  constructor(private http: HttpClient) {}
  getAllThreadHdr(startPage?: number, maxPage?: number): Observable < FindAllThreadHdrRes > {
    let url = 'http://localhost:3333/threads';
    if(!startPage && !maxPage){
      return this.http.get < FindAllThreadHdrRes > (url);
    } else{
      return this.http.get<FindAllThreadHdrRes>(`${url}?=startPage=${startPage}&maxPage=${maxPage}`);
    }
  }

  getAllThreadHdrByUserLogged(data: string): Observable < FindAllThreadHdrRes > {
    return this.http.get < FindAllThreadHdrRes > ('http://localhost:3333/threads/users/' + data)
  }

  insertThreadHdr(data: InsertThreadHdrReq): Observable < InsertRes > {
    return this.http.post < InsertRes > ('http://localhost:3333/threads', data)
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
