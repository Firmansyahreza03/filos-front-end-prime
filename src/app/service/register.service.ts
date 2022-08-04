import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { InsertRes } from "../pojo/insert-res";
import { GeneratedCode } from "../pojo/pojo-import";
import { InsertProfileReq} from "../pojo/profile/insert-profile-req";
import { verificationUserReq } from "../pojo/user/user-verification-req";
import { verificationUserRes } from "../pojo/user/user-verification-res";

@Injectable({
    providedIn:'root' 
})
export class RegisterService{

    constructor(private http : HttpClient){}

    register(data: InsertProfileReq):Observable<InsertRes>{
        return this.http.post<InsertRes>('http://localhost:3333/users',data)
    }

    generateCode(data: string):Observable<GeneratedCode>{
        return this.http.post<GeneratedCode>('http://localhost:3333/users/generate-valid-code', data)
    }

    validateCode(data: verificationUserReq): Observable<verificationUserRes>{
        return this.http.post<verificationUserRes>('http://localhost:3333/users/validate-verification-code', data)
    }
}