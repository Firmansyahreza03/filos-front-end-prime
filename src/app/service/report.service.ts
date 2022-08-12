import { Injectable } from "@angular/core";
import { LimitTimeReq } from "../pojo/pojo-import";

@Injectable({
    providedIn:'root'
})
export class ReportService{
    mainUrl:string = "http://localhost:3333/report/"

    constructor(){}

    adminReportUserComm(data: LimitTimeReq):void{
        let url = this.mainUrl + "admin-user/?";
        url = url+`startAt=${data.startAt}`+`&endAt=${data.endAt}`
        window.open(url, '_blank');
    }
    
    adminReportIncomeComm(data: LimitTimeReq):void{
        let url = this.mainUrl + "admin-income/?";
        url = url+`startAt=${data.startAt}`+`&endAt=${data.endAt}`
        window.open(url, '_blank');
    }
    
    reportUserComm(data: LimitTimeReq, refreshToken: string):void{
        let url = this.mainUrl + "user/?";
        url = url+`refreshToken=${refreshToken}`+`&startAt=${data.startAt}`+`&endAt=${data.endAt}`
        window.open(url, '_blank');
    }
    
    reportIncomeComm(data: LimitTimeReq, refreshToken: string):void{
        let url = this.mainUrl + "income/?";
        url = url+`refreshToken=${refreshToken}`+`&startAt=${data.startAt}`+`&endAt=${data.endAt}`
        window.open(url, '_blank');
    }
}