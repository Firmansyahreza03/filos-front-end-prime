import { Component, OnDestroy, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { CommunityCategory } from 'src/app/constant/community-category';
import { DefaultPic } from 'src/app/constant/default-pic';
import {
  FindAllCommunityRes,
  FindCommunityRes,
} from 'src/app/pojo/pojo-import';
import { CommunityService } from 'src/app/service/community.service';
import { LoginService } from 'src/app/service/login.service';

@Component({
  selector: 'app-community-detail',
  templateUrl: './community-detail.component.html',
  styleUrls: ['community-detail.component.css'],
})
export class CommunityDetailComponent implements OnInit, OnDestroy {
  idParam!: string;
  communityDtlSubscription?: Subscription;
  eventSubs?: Subscription;
  trainingSubs?: Subscription;
  communityData!: FindCommunityRes ;
  showSpinner!:boolean;

  listEvent: FindAllCommunityRes = {};

  listTraining: FindAllCommunityRes = {};

  constructor(
    private router: Router,
    private communityService: CommunityService,
    private activatedRouted: ActivatedRoute,
    private loginService: LoginService,
    private titleService:Title
  ) {}

  getDtlData():void{
    this.communityDtlSubscription = this.activatedRouted.params.subscribe(
      (result) => {
        const resultTmp: any = result;
        this.idParam = resultTmp.id;
        this.communityDtlSubscription = this.communityService
          .getCommunityById(this.idParam)
          .subscribe((result) => {
            this.communityData = result;
            this.titleService.setTitle(this.communityData.data?.title)
          });
      }
    );
  }

  ngOnInit(): void {
    this.showSpinner=true;
    setTimeout(()=>{
      this.showSpinner=false;
      this.getDtlData();
    },500)
    this.getAllEvent();
    this.getAllTraining();
  }

  back(): void {
    this.router.navigateByUrl('/communities');
  }
  toPayment():void {
    this.router.navigateByUrl('/payment/'+this.idParam);
  }
  getAllEvent(): void {
    this.eventSubs = this.communityService
      .getByIndustryAndCategory(
        this.loginService.getLoggedEmail()!,
        CommunityCategory.event,
        0,
        3
      )
      .subscribe((res) => {
        this.listEvent = res;
      });
  }

  getPhoto(fileId: string): string {
    if(fileId != null){
      return `http://localhost:3333/files/${fileId}`;
    } else {
      return DefaultPic.commFile;
    }
  }

  getAllTraining(): void {
    this.trainingSubs = this.communityService
      .getByIndustryAndCategory(
        this.loginService.getLoggedEmail()!,
        CommunityCategory.training,
        0,
        3
      )
      .subscribe((res) => {
        this.listTraining = res;
      });
  }

  ngOnDestroy(): void {
    this.communityDtlSubscription?.unsubscribe();
  }
}
