import { Component } from "@angular/core";
import { Router } from '@angular/router';
import { Subscription } from "rxjs";

import { LazyLoadEvent } from 'primeng/api';
import { DataThreadHdr, DeleteRes } from "../../../../pojo/pojo-import";
import { ThreadHdrService } from "../../../../service/import.service";

@Component({
  selector: 'admin-thread-list',
  templateUrl: './thread-list.component.html',
})
export class ThreadListComponent {
  subscription ? : Subscription;
  loading: boolean = true;

  listData: DataThreadHdr[] = [];

  delRes!: DeleteRes;

  startPage: number = 0;
  maxPage: number = 5;
  totalData: number = 0;
  query ? : string;
  slcId!: string;
  mainUrl!: string;

  cols: any[] = [
    {
      field: 'threadCode',
      header: 'code'
    },
    {
      field: 'threadName',
      header: 'title'
    },
    {
      field: 'categoryName',
      header: 'category'
    },
    {
      field: 'creatorName',
      header: 'creator'
    },
    {
      field: 'createdAt',
      header: 'created at'
    },
    {
      field: 'isPremium',
      header: 'premium only'
    }
  ];

  constructor(
    private service: ThreadHdrService,
    private router: Router
  ) {}

  loadData(event: LazyLoadEvent) {
    setTimeout(()=>{
      this.viewData(event.first, event.rows, event.globalFilter)
    },800)
  }

  viewData(startPage: number = this.startPage, maxPage: number = this.maxPage, query ? : string): void {
    this.loading = true;
    this.startPage = startPage
    this.maxPage = maxPage
    this.query = query

    this.subscription = this.service.getAllThreadHdr(startPage, maxPage, query)
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

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }
}
