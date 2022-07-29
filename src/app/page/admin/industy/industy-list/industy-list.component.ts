import { style } from "@angular/animations";
import { Component } from "@angular/core";
import { Subscription } from "rxjs";

import {ConfirmationService, MessageService} from 'primeng/api';
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
  
  listData!: FindAllIndustryRes;
  delRes!: DeleteRes;
  slcId!: number;

  constructor(
    private industryService: IndustryService,
    private messageService: MessageService,
    private confirmationService: ConfirmationService
  ) {}

  ngOnInit(): void {
    this.viewData();
  }

  viewData(): void {
    this.subscription = this.industryService.getAllIndustry()
      .subscribe((result) => {
        this.listData = result;
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
