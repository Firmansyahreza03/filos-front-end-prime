import { Component } from "@angular/core";
import { Router } from '@angular/router';
import { Subscription } from "rxjs";

import { ConfirmationService, LazyLoadEvent, MessageService } from 'primeng/api';
import { DataPaymentTransaction, ValidPaymentTransactionReq} from "../../../../pojo/pojo-import";
import { PaymentService } from "../../../../service/import.service";
@Component({
  selector: 'admin-payment-list',
  templateUrl: './payment-list.component.html',
  providers: [ConfirmationService, MessageService]
})
export class PaymentListComponent {
  subscription ? : Subscription;
  loading: boolean = true;

  listData: DataPaymentTransaction[] = [];
  req: ValidPaymentTransactionReq ={
    id : "",
    version : 0
  };

  startPage: number = 0;
  maxPage: number = 5;
  totalData: number = 0;
  query ? : string;
  slcId!: string;
  fileAtt!: string;
  mainUrl!: string;

  cols: any[] = [{
      field: 'code',
      header: 'code'
    },
    {
      field: 'desc',
      header: 'description'
    },
    {
      field: 'price',
      header: 'price'
    },
    {
      field: 'isAcc',
      header: 'validation'
    },
  ];

  constructor(
    private service: PaymentService,
    private router: Router,
    private confirmationService: ConfirmationService
  ) {}

  loadData(event: LazyLoadEvent) {
    this.viewData(event.first, event.rows, event.globalFilter)
  }

  viewData(startPage: number = this.startPage, maxPage: number = this.maxPage, query ? : string): void {
    this.loading = true;
    this.startPage = startPage
    this.maxPage = maxPage
    this.query = query

    this.subscription = this.service.getAll(query, startPage, maxPage)
      .subscribe((result) => {
        this.loading = false;
        this.listData = result.data!;
        this.totalData = result.count??this.listData.length;
      });
  }

  ngOnInit(): void {
    const thisUrl: string[] = this.router.url.split("/");
    this.mainUrl = thisUrl[1] + "/" + thisUrl[2] + "/";
  }


  getFile(fileId: string): void {
    this.fileAtt = 'http://localhost:3333/files/' + fileId;
    this.confirmationService.confirm({
      message: 'Do you sure want to download this file?',
      header: 'Download file',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.downloadFile();
      },
      reject: () => {}
    });
  }

  downloadFile(): void {
    window.open(this.fileAtt, '_blank');
  }

  confirmPayment(id: string): void {
    this.req.id = id;
    this.confirmationService.confirm({
      message: 'Do you sure want to validation this payment transaction?',
      header: 'Confirmation',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.validationPayment();
      },
      reject: () => {}
    });
  }

  validationPayment(): void {
    this.subscription = this.service.valid(this.req)
      .subscribe(() => {
        this.viewData(this.startPage, this.maxPage, "")
      })
  }
  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }
}
