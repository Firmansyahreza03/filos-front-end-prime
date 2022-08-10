import { style } from "@angular/animations";
import { Component } from "@angular/core";
import { Router } from '@angular/router';
import { Subscription } from "rxjs";

import { ConfirmationService, MessageService } from 'primeng/api';

import { LimitTimeReq } from '../../../../pojo/pojo-import';
import { ReportService } from "../../../../service/import.service";

@Component({
  selector: 'admin-report',
  templateUrl: './report.component.html',
  providers: [ConfirmationService, MessageService]
})
export class ReportComponent {
  loading: boolean = true;
  req!:LimitTimeReq;

  
  constructor(
    private service: ReportService,
    private confirmationService: ConfirmationService
  ) {}
  
  onSubmit():void{

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
    if(chose == 1 ) this.service.reportUserComm(this.req);
    if(chose == 2 ) this.service.reportIncomeComm(this.req);
  }

}
