import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { FindFileRes } from "../pojo/pojo-import";

@Injectable({
    providedIn: 'root'
})

export class FileService {

    constructor(private http: HttpClient) {}
    
    findById(id : string) : Observable<FindFileRes>{
      return this.http.get<FindFileRes>(`http://localhost:3333/files/${id}`)
    }
    
    uploadAsBase64(file: any) : Promise<[string, string]> {
        return new Promise<[string, string]>((resolve, reject) => {
          const fileName = (file.name as string)
          const ext = fileName.substring(fileName.lastIndexOf('.') + 1)
    
          const reader = new FileReader()
          reader.readAsDataURL(file)
          reader.onload = () => {
            const result = (reader.result as string)
            const resultTemp = result.substring(result.indexOf('base64,') + 7)
            resolve([resultTemp, ext])
          }
          reader.onerror = error => reject(JSON.stringify(error))
        })
      }
}