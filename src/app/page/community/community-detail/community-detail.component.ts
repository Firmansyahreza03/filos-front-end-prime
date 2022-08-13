import { Component, OnDestroy, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { CommunityCategory } from 'src/app/constant/community-category';
import { DefaultPic } from 'src/app/constant/default-pic';
import {
  DataCommunity,
  FindAllCommunityRes,
} from 'src/app/pojo/pojo-import';
import { CommunityService } from 'src/app/service/community.service';
import { LoginService } from 'src/app/service/login.service';
import { MemberCommunityService } from 'src/app/service/member-community.service';

@Component({
  selector: 'app-community-detail',
  templateUrl: './community-detail.component.html',
  styleUrls: ['community-detail.component.css'],
})
export class CommunityDetailComponent implements OnInit, OnDestroy {
  idParam!: string;
  communityDtlSubscription?: Subscription;
  memberCommSubs?: Subscription;
  eventSubs?: Subscription;
  trainingSubs?: Subscription;
  communityData: DataCommunity = {
    code: '',
    desc: '',
    endAt: '',
    id: '',
    idCategory: '',
    idIndustry: '',
    isActive: true,
    location: '',
    nameCategory: '',
    nameIndustry: '',
    price: 0,
    provider: '',
    startAt: '',
    title: '',
    version: 0,
  };

  isLogin: boolean = this.loginService.isLogin();
  showSpinner!:boolean;
  isJoined?: boolean;

  listEvent: FindAllCommunityRes = {};

  listTraining: FindAllCommunityRes = {};

  constructor(
    private router: Router,
    private communityService: CommunityService,
    private activatedRouted: ActivatedRoute,
    private loginService: LoginService,
    private titleService:Title,
    private memberCommunityService: MemberCommunityService,
  ) {}

  getDtlData():void{
      this.communityDtlSubscription = this.communityService
        .getCommunityById(this.idParam)
        .subscribe((result) => {
          this.communityData = result.data!;
          this.titleService.setTitle(this.communityData.title)
        });
      
  }

  ngOnInit(): void {
    this.communityDtlSubscription = this.activatedRouted.params.subscribe(
      (result) => {
        const resultTmp: any = result;
        this.idParam = resultTmp.id;  
    });

    if(this.isLogin){
      this.memberCommSubs = this.memberCommunityService
        .checkIsJoined(this.idParam)
        .subscribe((res)=>{
            this.isJoined = res;
          })    
      this.getAllEvent();
      this.getAllTraining();
    }

    this.showSpinner=true;
    setTimeout(()=>{
      this.showSpinner=false;
      this.getDtlData();
    })

    
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
    this.memberCommSubs?.unsubscribe();
  }
}
