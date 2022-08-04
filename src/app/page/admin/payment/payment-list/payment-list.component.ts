import { Component } from "@angular/core";
import { Router } from '@angular/router';
import { Subscription } from "rxjs";

import { LazyLoadEvent } from 'primeng/api';
import { DataPaymentTransaction} from "../../../../pojo/pojo-import";
import { PaymentService } from "../../../../service/import.service";

@Component({
  selector: 'admin-payment-list',
  templateUrl: './payment-list.component.html',
})
export class PaymentListComponent {
//   subscription ? : Subscription;
//   loading: boolean = true;

//   listData: DataPaymentTransaction[] = [];

//   startPage: number = 0;
//   maxPage: number = 5;
//   totalData: number = 0;
//   query ? : string;
//   slcId!: string;
//   mainUrl!: string;

//   cols: any[] = [
//     {
//       field: 'PaymentCode',
//       header: 'code'
//     },
//     {
//       field: 'PaymentName',
//       header: 'title'
//     },
//     {
//       field: 'categoryName',
//       header: 'category'
//     },
//     {
//       field: 'creatorName',
//       header: 'creator'
//     },
//     {
//       field: 'createdAt',
//       header: 'created at'
//     },
//     {
//       field: 'isPremium',
//       header: 'premium only'
//     }
//   ];

//   constructor(
//     private service: PaymentService,
//     private router: Router
//   ) {}

//   loadData(event: LazyLoadEvent) {
//     this.viewData(event.first, event.rows, event.globalFilter)
//   }

//   viewData(startPage: number = this.startPage, maxPage: number = this.maxPage, query ? : string): void {
//     this.loading = true;
//     this.startPage = startPage
//     this.maxPage = maxPage
//     this.query = query

//     this.subscription = this.service.getAll(query, startPage, maxPage)
//       .subscribe((result) => {
//         this.loading = false;
//         this.listData = result.data!;
//         this.totalData = result.count??this.listData.length;
//       });
//   }

//   ngOnInit(): void {
//     const thisUrl: string[] = this.router.url.split("/");
//     this.mainUrl = thisUrl[1] + "/" + thisUrl[2] + "/";
//   }

//   ngOnDestroy(): void {
//     this.subscription?.unsubscribe();
//   }
}
