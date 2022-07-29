import { DataIndustry } from 'src/app/pojo/industry/data-industry';
import { style } from "@angular/animations";
import { Component } from "@angular/core";
import { Subscription } from "rxjs";

import {ConfirmationService, LazyLoadEvent, MessageService} from 'primeng/api';
import { DeleteRes } from "src/app/pojo/delete-res";
import { FindAllIndustryRes } from "src/app/pojo/pojo-import";
import { IndustryService } from "src/app/service/industry.service";

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

  startPage: number = 0
  maxPage: number = 5
  totalData: number = 0
  query?: string
  slcId!: number;

  cols: any[] = [
    {field: 'code', header: 'Code'},
    {field: 'name', header: 'Name'},
  ];

  constructor(
    private industryService: IndustryService,
    private messageService: MessageService,
    private confirmationService: ConfirmationService
  ) {}
  
  loadData(event: LazyLoadEvent) {
    console.log(event)
    this.viewData(event.first, event.rows, event.globalFilter)
  }

  viewData(startPage: number = this.startPage, maxPage: number = this.maxPage, query?: string): void {
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

  getId(id: number): void {
    this.slcId = id;
  }

  deleteData(): void {
    this.subscription = this.industryService.delete(this.slcId)
    .subscribe((result) => {
        this.viewData();
      })
  }

  deleteConfirm(id: number) {
    this.slcId = id;
    this.confirmationService.confirm({
        message: 'Apakah kau yakin ingin mendelete data ini?',
        header: 'Hapus data',
        icon: 'pi pi-exclamation-triangle',
        accept: () => {
          this.messageService.add({severity:'info', summary:'Confirmed', detail:'Data berhasil didelete'});
          this.deleteData();
        },
        reject: () => {
          this.messageService.add({severity:'warn', summary:'Cancelled', detail:'Tidak jadi delete data'});
        }
    });
}

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }
}
