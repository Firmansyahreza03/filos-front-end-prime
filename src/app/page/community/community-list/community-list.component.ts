import { Component, OnDestroy, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { CommunityCategory } from 'src/app/constant/community-category';
import { DefaultPic } from 'src/app/constant/default-pic';
import { FindAllCommunityRes } from 'src/app/pojo/pojo-import';
import { CommunityService } from 'src/app/service/community.service';

@Component({
  selector: 'app-community-list',
  templateUrl: './community-list.component.html',
  styleUrls: ['community-list.component.css'],
})

export class CommunityListComponent implements OnInit {
  eventSubscription?: Subscription;
  trainingSubscription?: Subscription;
  idDetail!: string;
  title = 'Community';
  showSpinner!:boolean;

  listEvent: FindAllCommunityRes = {
    data: [],
    count: 0,
  };

  listTraining: FindAllCommunityRes = {
    data: [],
    count: 0,
  };

  constructor(
    private router: Router,
    private communityService: CommunityService,
    private titleService:Title
  ) {}

  ngOnInit(): void {
      this.showSpinner=true;  
      this.titleService.setTitle(this.title)
      setTimeout(()=>{
        this.showSpinner=false;  
        this.eventSubscription = this.communityService
        .getAll(CommunityCategory.event)
        .subscribe((result) => {
          this.listEvent = result;
        });
  
      this.trainingSubscription = this.communityService
        .getAll(CommunityCategory.training)
        .subscribe((res) => {
          this.listTraining = res;
        });
      },500)
  }

  getCommPic(fileId: string): string {
    if (fileId != null) {
      return 'http://localhost:3333/files/' + fileId;
    } else {
      return DefaultPic.commFile;
    }
  }

  onClick(id: string): void {
    this.idDetail = id;
    this.router.navigateByUrl(`/communities/detail/${id}`);
  }

  ngOnDestroy(): void {
    this.eventSubscription?.unsubscribe();
    this.trainingSubscription?.unsubscribe();
  }
}
