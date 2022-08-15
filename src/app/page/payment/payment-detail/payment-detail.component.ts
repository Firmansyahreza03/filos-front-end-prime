import { Subscription } from 'rxjs';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {
  DataPaymentTransaction,
  InsertMemberCommunityReq,
  InsertPaymentTransactionReq,
} from '../../../pojo/pojo-import';
import {
  CommunityService,
  FileService,
  MemberCommunityService,
  PaymentService,
} from '../../../service/import.service';
import { DefaultPic } from '../../../constant/default-pic';
import { TransactionType } from '../../../constant/transaction-type';
import { SubscriptionPrice } from '../../../constant/subscription-price';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-payment-detail',
  templateUrl: './payment-detail.component.html',
  styleUrls: ['payment-detail.component.css'],
})
export class PaymentDetailComponent implements OnInit, OnDestroy {
  subs?: Subscription;
  transactionSubs?: Subscription;
  memberCommSubs?: Subscription;

  backUrl!: string;
  idParam!: string;
  step: number = 1;

  orderData: DataPaymentTransaction = {};

  req: InsertPaymentTransactionReq = {
    desc: '',
    price: 0,
    type: '',
  };

  reqComm: InsertMemberCommunityReq = {
    idCommunity: '',
    idPayment: '',
    isActive: true,
  };

  constructor(
    private router: Router,
    private activatedRouted: ActivatedRoute,

    private fileService: FileService,
    private communityService: CommunityService,
    private paymentService: PaymentService,
    private memberCommunityService: MemberCommunityService,
    private titleService: Title
  ) {}

  back(): void {
    this.router.navigateByUrl(this.backUrl);
  }

  onUpload(event: any) {
    const file = event.files[0];
    this.fileService.uploadAsBase64(file).then((res) => {
      this.req.fileName = res[0];
      this.req.fileExt = res[1];
    });
  }

  order(): void {
    this.step = 2;
  }

  payment(): void {
    this.step = 3;
  }

  confirmation(): void {
    this.req.desc = this.orderData.desc!;
    this.req.price = this.orderData.price!;
    this.req.type = this.orderData.type!;

    this.transactionSubs = this.paymentService
      .insert(this.req)
      .subscribe((res) => {
        if (this.req.type == TransactionType.COMM) {
          this.reqComm.idCommunity = this.idParam;
          this.reqComm.idPayment = res.data!.id!;
          this.reqComm.isActive = true;
          this.memberCommSubs = this.memberCommunityService.insert(this.reqComm).subscribe((res)=>{
            this.router.navigateByUrl('/home-member');
          })
        }
      });
  }

  ngOnInit(): void {
    this.titleService.setTitle('Payment')
    const thisUrl: string[] = this.router.url.split('/');
    if (thisUrl[2] == null) {
      this.backUrl = '/home-member';
      this.getSubsPayment();
    } else {
      this.backUrl = '/communities/detail/' + thisUrl[2];
      this.getCommData();
    }
  }

  ngOnDestroy(): void {
    this.subs?.unsubscribe();
    this.transactionSubs?.unsubscribe();
  }

  getSubsPayment(): void {
    this.orderData.type = TransactionType.SUBS;
    this.orderData.desc = "Subscription";
    this.orderData.price = SubscriptionPrice.SUBS;
    this.orderData.fileId = DefaultPic.subs;
  }

  getCommData(): void {
    this.subs = this.activatedRouted.params.subscribe((result) => {
      const resultTmp: any = result;
      this.idParam = resultTmp.id;
      this.subs = this.communityService
        .getCommunityById(this.idParam)
        .subscribe((result) => {
          this.orderData.type = TransactionType.COMM;
          this.orderData.desc = result.data?.title;
          this.orderData.price = result.data?.price;
          if(result.data?.idFile != null){
            this.orderData.fileId =
              'http://localhost:3333/files/' + result.data?.idFile;
          } else {
            this.orderData.fileId = DefaultPic.commFile;
          }
        });
    });
  }
}
