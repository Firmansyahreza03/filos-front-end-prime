import { Subscription } from 'rxjs';
import { Component, OnDestroy, OnInit } from '@angular/core';

import { CommunityCategory } from 'src/app/constant/community-category';
import { FindAllCommunityRes } from 'src/app/pojo/pojo-import';
import { CommunityService, LoginService } from 'src/app/service/import.service';
import { DefaultPic } from 'src/app/constant/default-pic';

@Component({
  selector: 'home-right-page',
  templateUrl: './right-home.component.html',
  styleUrls: ['../home-member.component.css'],
})
export class RightPageComponent implements OnInit, OnDestroy {
  subscription?: Subscription;
  proPic!: string;

  listTraining: FindAllCommunityRes = {};
  listEvent: FindAllCommunityRes = {};

  constructor(
    private loginService: LoginService,
    private communityService: CommunityService,
  ) {}

  ngOnInit(): void {
    this.getAllTraining();
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }

  getAllEvent(): void {
    this.subscription = this.communityService
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
    this.subscription = this.communityService
      .getByIndustryAndCategory(this.loginService.getLoggedEmail()!,CommunityCategory.training,0,3)
      .subscribe((res) => {
        this.listTraining = res;
      });
  }
  
  getPhotoCommun(fileId: string): string {
    if(fileId == null){
      return DefaultPic.commFile;
    } else {
      return 'http://localhost:3333/files/'+fileId;
    }
  }
}
