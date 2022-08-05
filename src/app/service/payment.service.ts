import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { DeleteRes } from "../pojo/delete-res";
import { InsertRes } from "../pojo/insert-res";
import { UpdateRes } from "../pojo/update-res";
import { FindAllPaymentTransactionRes, FindPaymentTransactionRes, InsertPaymentTransactionReq, UpdatePaymentTransactionReq, ValidPaymentTransactionReq } from "../pojo/pojo-import";

@Injectable({
    providedIn: 'root'
})
export class PaymentService {
    mainUrl = "http://localhost:3333/payment-transactions";
    
    constructor(private http: HttpClient) { }

    findById(id : string) : Observable<FindPaymentTransactionRes>{
        return this.http.get<FindPaymentTransactionRes>(this.mainUrl)
    }

    getAll( query?: string, startPage?: number, maxPage?: number): Observable<FindAllPaymentTransactionRes> {
        let url = this.mainUrl + "?";
        if(startPage != undefined && maxPage){
            url = url+`&startPage=${startPage}`+`&maxPage=${maxPage}`
        }
        if(query ){
            url = url+`&query=${query}`
        }
        return this.http.get<FindAllPaymentTransactionRes>(url);
    }

    insert(data:InsertPaymentTransactionReq): Observable<InsertRes> {
        return this.http.post<InsertRes>(this.mainUrl, data)
    }
    update(data : UpdatePaymentTransactionReq) : Observable<UpdateRes>{
        return this.http.put<UpdateRes>(this.mainUrl, data)
    }
    delete(id : string) : Observable<DeleteRes>{
        const url = this.mainUrl + "/" + id;
        return this.http.delete<DeleteRes>(url)
    }
    valid(data : ValidPaymentTransactionReq) : Observable<UpdateRes>{
        const url = this.mainUrl + "/valid";
        return this.http.put<UpdateRes>(url, data)
    }
}