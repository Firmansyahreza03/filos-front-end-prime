import { style } from "@angular/animations";
import { Component } from "@angular/core";
import { Router } from '@angular/router';
import { Subscription } from "rxjs";

import { ConfirmationService, LazyLoadEvent } from 'primeng/api';
import { DataProfile, DeleteRes } from '../../../../pojo/pojo-import';
import { UserService } from "../../../../service/import.service";

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  providers: [ConfirmationService]
})
export class UserListComponent {
  subscription ? : Subscription;
  loading: boolean = true;

  listData: DataProfile[] = [];
  delRes!: DeleteRes;

  startPage: number = 0;
  maxPage: number = 5;
  totalData: number = 0;
  query ? : string;
  slcId!: string;
  mainUrl!: string;
  
  cols: any[] = [{
      field: 'fullName',
      header: 'full name'
    },
    {
      field: 'userEmail',
      header: 'email'
    },
    {
      field: 'companyName',
      header: 'company'
    },
    {
      field: 'industryName',
      header: 'industry'
    }
  ];

  constructor(
    private userService: UserService,
    private confirmationService: ConfirmationService,
    private router: Router
  ) {}

  loadData(event: LazyLoadEvent) {
    this.viewData(event.first, event.rows, event.globalFilter)
  }

  viewData(startPage: number = this.startPage, maxPage: number = this.maxPage, query ? : string): void {
    this.loading = true;
    this.startPage = startPage
    this.maxPage = maxPage
    this.query = query

    this.subscription = this.userService.getAll(startPage, maxPage, query)
      .subscribe((result) => {
        this.loading = false;
        this.listData = result.data;
        this.totalData = result.count??this.listData.length;
      });
  }

  deleteData(): void {
    this.subscription = this.userService.delete(this.slcId)
      .subscribe(() => {
        this.viewData();
      })
  }

  deleteConfirm(id: string) {
    this.slcId = id;
    this.confirmationService.confirm({
      message: 'Apakah kau yakin ingin mendelete data ini?',
      header: 'Hapus data',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.deleteData();
      },
      reject: () => {
      }
    });
  }

  ngOnInit(): void {
    const thisUrl: string[] = this.router.url.split("/");
    this.mainUrl = thisUrl[1] + "/" + thisUrl[2] + "/";
  }

  toAdd():void{
    this.router.navigateByUrl(this.mainUrl+"add");
  }

  toEdit(id:string):void{
    this.router.navigateByUrl(this.mainUrl+"edit/"+id);
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }
}
