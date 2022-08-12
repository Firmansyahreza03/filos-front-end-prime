import { formatDate } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { ConfirmationService, MessageService } from "primeng/api";
import { LimitTimeReq } from "src/app/pojo/pojo-import";
import { ReportService } from "src/app/service/report.service";

@Component({
    selector:'app-report-your-community',
    templateUrl:'./report-your-community.component.html',
    providers: [ConfirmationService, MessageService]
})
export class ReportYourCommunityComponent implements OnInit{
    loading: boolean = true;
  showSpinner:boolean=false;
  req:LimitTimeReq = { 
    startAt:"",
    endAt:""
  };
    constructor(
        private router: Router,
        private service: ReportService,
    private confirmationService: ConfirmationService
    ){}


  ngOnInit(): void {
     this.showSpinner=true;
    setTimeout(()=>{
      this.showSpinner=false;
    },500)
  }

    back():void{
        this.router.navigateByUrl('/communities')
    }

    confirimation(chose:number): void {
        this.confirmationService.confirm({
          message: 'Do you sure want to download this file?',
          header: 'Download file',
          icon: 'pi pi-exclamation-triangle',
          accept: () => {
            this.downloadReport(chose);
          },
          reject: () => {}
        });
      }
    
      downloadReport(chose:number): void {
        const startDate = formatDate(this.req.startAt, `yyyy-MM-dd`, 'en')
        const endDate = formatDate(this.req.endAt, `yyyy-MM-dd`, 'en')
        this.req.startAt = startDate;
        this.req.endAt = endDate;
        if(chose == 1 ) this.service.adminReportUserComm(this.req);
        if(chose == 2 ) this.service.adminReportIncomeComm(this.req);
      }
}