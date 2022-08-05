import { Subscription } from 'rxjs';
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { FindCommunityRes, InsertPaymentTransactionReq } from "src/app/pojo/pojo-import";
import { CommunityService, FileService } from "src/app/service/import.service";
import { DefaultPic } from 'src/app/constant/DefaultPic';

@Component({
  selector: 'app-payment-detail',
  templateUrl: './payment-detail.component.html',
  styleUrls: ['payment-detail.component.css']
})
export class PaymentDetailComponent {
  subs ?: Subscription;

  backUrl !: string;
  idParam !: string;
  step : number = 1;

  orderData : any = {};

  req : InsertPaymentTransactionReq = {
    isActive: true,
    desc: "",
    price: 0,
  }

  constructor(
    private router: Router,
    private activatedRouted: ActivatedRoute,

    private fileService: FileService,
    private communityService: CommunityService,
  ) {}

  back(): void {
    this.router.navigateByUrl(this.backUrl)
  }

  onUpload(event: any) {
    const file = event.files[0];
    this.fileService.uploadAsBase64(file).then(res => {
      this.req.fileName = res[0];
      this.req.fileExt = res[1];
    })
  }

  order(): void {
    this.step = 2;
  }

  payment(): void {
    this.step = 3
  }
  confirmation(): void {
    this.step = 4
  }

  ngOnInit(): void {
    const thisUrl: string[] = this.router.url.split("/");
    if (thisUrl[2] == null) {
        this.backUrl = "/landing";
        this.getSubsPayment();
    }
    else {
        this.backUrl = "/communities/detail/" + thisUrl[2];
        this.getCommData();
    }
  }

  getSubsPayment(): void {
    this.orderData.title = "become premium";
    this.orderData.location = "subcription";
    this.orderData.startAt = "today";
    this.orderData.endAt = "1 month later";
    this.orderData.price = 500000;
    this.orderData.idFile = DefaultPic.subs;
  }

  getCommData(): void {
    this.subs = this.activatedRouted.params.subscribe(
      (result) => {
        const resultTmp: any = result;
        this.idParam = resultTmp.id;
        this.subs = this.communityService
          .getCommunityById(this.idParam)
          .subscribe((result) => {
            this.orderData = result.data;
            this.orderData.idFile = "http://localhost:3333/files/" + this.orderData.idFile;
          });
      }
    );
  }
}
