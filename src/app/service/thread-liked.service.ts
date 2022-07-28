import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { dataCountThread } from '../pojo/thread-liked/data-count-thread';
import { likeData } from '../pojo/thread-liked/like-data';

@Injectable({
  providedIn: 'root',
})
export class ThreadLikedService {
  constructor(private http: HttpClient) {}

  likeThread(data: string, email: string): Observable<likeData> {
    return this.http.get<likeData>(
      `http://localhost:3333/threads-liked/thread/${data}/user/${email}`
    );
  }
}
