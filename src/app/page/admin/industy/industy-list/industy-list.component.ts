import { style } from "@angular/animations";
import { Component } from "@angular/core";
import { Router } from '@angular/router';
import { Subscription } from "rxjs";

import { ConfirmationService, LazyLoadEvent, MessageService } from 'primeng/api';
import { DataIndustry } from 'src/app/pojo/industry/data-industry';
import { DeleteRes } from "src/app/pojo/pojo-import";
import { IndustryService } from "src/app/service/import.service";

@Component({
  selector: 'app-industy-list',
  templateUrl: './industy-list.component.html',
  providers: [ConfirmationService, MessageService]
})
export class IndustyListComponent {
  subscription ? : Subscription;
  loading: boolean = true;

  listData: DataIndustry[] = [];
  delRes!: DeleteRes;

  startPage: number = 0;
  maxPage: number = 5;
  totalData: number = 0;
  query ? : string;
  slcId!: string;
  mainUrl!: string;

  cols: any[] = [{
      field: 'code',
      header: 'code'
    },
    {
      field: 'name',
      header: 'name'
    },
  ];

  constructor(
    private industryService: IndustryService,
    private messageService: MessageService,
    private confirmationService: ConfirmationService,
    private router: Router
  ) {}

  loadData(event: LazyLoadEvent) {
    console.log(event)
    this.viewData(event.first, event.rows, event.globalFilter)
  }

  viewData(startPage: number = this.startPage, maxPage: number = this.maxPage, query ? : string): void {
    this.loading = true;
    this.startPage = startPage
    this.maxPage = maxPage
    this.query = query

    this.subscription = this.industryService.getAllIndustry(startPage, maxPage, query)
      .subscribe((result) => {
        this.loading = false;
        this.listData = result.data;
        this.totalData = result.count??this.listData.length;
      });
  }

  deleteData(): void {
    this.subscription = this.industryService.delete(this.slcId)
      .subscribe((result) => {
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
        this.messageService.add({
          severity: 'info',
          summary: 'Confirmed',
          detail: 'Data berhasil didelete'
        });
        this.deleteData();
      },
      reject: () => {
        this.messageService.add({
          severity: 'warn',
          summary: 'Cancelled',
          detail: 'Tidak jadi delete data'
        });
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
