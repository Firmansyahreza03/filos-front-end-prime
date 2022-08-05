import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { Subscription } from 'rxjs';
import { CommunityCategory } from 'src/app/constant/community-category';
import {
  FindAllCommunityRes,
  FindThreadDtlRes,
  FindThreadHdrRes,
} from 'src/app/pojo/pojo-import';
import { CommunityService } from 'src/app/service/community.service';
import { LoginService } from 'src/app/service/login.service';
import { ThreadDtlService } from 'src/app/service/thread-dtl.service';
import { ThreadHdrService } from 'src/app/service/thread-hdr.service';
@Component({
  selector: 'app-thread-detail',
  templateUrl: './thread-detail.component.html',
  styleUrls: ['thread-detail.component.css'],
})
export class ThreadDetailComponent implements OnInit, OnDestroy {
  idParam!: string;
  threadHdrSubscription?: Subscription;
  threadDtlSubcription?: Subscription;
  eventSubs?: Subscription;
  trainingSubs?: Subscription;
  threadHdrData: FindThreadHdrRes = {};
  threadDtlData: FindThreadDtlRes = {};
  listEvent: FindAllCommunityRes = {};
  listTraining: FindAllCommunityRes = {};

  constructor(
    private loginService: LoginService,
    private threadHdrService: ThreadHdrService,
    private threadDtlService: ThreadDtlService,
    private communityService: CommunityService,
    private activatedRouted: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.threadHdrSubscription = this.activatedRouted.params.subscribe(
      (result) => {
        const resultTmp: any = result;
        this.idParam = resultTmp.id;
        this.threadHdrSubscription = this.threadHdrService
          .findThreadHdrById(this.idParam)
          .subscribe((result) => {
            if(result.data == null){
                this.router.navigateByUrl('/payment');
            } else{
                this.threadHdrData = result;
            }
          });
      }
    );
    this.getAllEvent();
    this.getAllTraining();
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

  back(): void {
    this.router.navigateByUrl('/home-member');
  }
  
  ngOnDestroy(): void {
    this.threadHdrSubscription?.unsubscribe();
  }
}
