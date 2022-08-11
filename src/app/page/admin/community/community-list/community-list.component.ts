import { Component } from "@angular/core";
import { Router } from '@angular/router';
import { Subscription } from "rxjs";

import { LazyLoadEvent } from 'primeng/api';
import { DataCommunity, DeleteRes } from "../../../../pojo/pojo-import";
import { CommunityService } from "../../../../service/import.service";

@Component({
  selector: 'admin-community-list',
  templateUrl: './community-list.component.html',
})
export class CommunityListComponent {
  subscription ? : Subscription;
  loading: boolean = true;

  listData: DataCommunity[] = [];

  delRes!: DeleteRes;

  startPage: number = 0;
  maxPage: number = 5;
  totalData: number = 0;
  query ? : string;
  slcId!: string;
  mainUrl!: string;

  cols: any[] = [
    {
      field: 'code',
      header: 'code'
    },
    {
      field: 'title',
      header: 'title'
    },
    {
      field: 'nameCategory',
      header: 'category'
    },
    {
      field: 'nameIndustry',
      header: 'Industry'
    },
    {
      field: 'provider',
      header: 'provider'
    },
    {
      field: 'price',
      header: 'price'
    },
    {
      field: 'startAt',
      header: 'startAt'
    },
    {
      field: 'endAt',
      header: 'endAt'
    }
  ];

  constructor(
    private service: CommunityService,
    private router: Router
  ) {}

  loadData(event: LazyLoadEvent) {
    setTimeout(()=>{
      this.viewData(event.first, event.rows, event.globalFilter)
    },1000)
  }

  viewData(startPage: number = this.startPage, maxPage: number = this.maxPage, query ? : string): void {
    this.loading = true;
    this.startPage = startPage
    this.maxPage = maxPage
    this.query = query

    this.subscription = this.service.getAll(null, query, startPage, maxPage)
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
