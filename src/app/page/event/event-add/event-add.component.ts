import { Component, OnDestroy, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Subscription } from "rxjs";
import { FindAllCommunityCategoryRes, FindAllIndustryRes, InsertCommunityRes } from "src/app/pojo/pojo-import";
import { CommunityCategoriesService } from "src/app/service/community-category.service";
import { CommunityService } from "src/app/service/community.service";
import { FileService } from "src/app/service/file.service";
import { IndustryService } from "src/app/service/industry.service";

@Component({
    selector:'app-event-add',
    templateUrl:'./event-add.component.html',
    styleUrls:['event-add.component.css']
})
export class EventAddComponent implements OnInit, OnDestroy{
    constructor(
        private router: Router, 
        private communityCategoriesService: CommunityCategoriesService, 
        private communityService:CommunityService,
        private industryService:IndustryService,
        private fileService: FileService
        ){}
    
    communityCategorySubscription?:Subscription
    communitySubscription?:Subscription
    industrySubscription?:Subscription

    listCommunityCategories: FindAllCommunityCategoryRes={
        data: [],
        count: 0
    }
    listIndustry:FindAllIndustryRes={
        data: [],
        count: 0
    }
    createCommunity:InsertCommunityRes={
    }

    ngOnInit(): void {
        this.createCommunity.code="3261331"; //ini digenerate dibackend
        this.createCommunity.isActive=true;
        this.communityCategorySubscription=this.communityCategoriesService.getAllCommunityCategory().subscribe((result)=>{
            this.listCommunityCategories=result;
        })
        this.industrySubscription=this.industryService.getAllIndustry().subscribe((result)=>{
            this.listIndustry=result;
        })
    }

    onChangeFile(event: any): void {
        const file = event.files[0];
        this.fileService.uploadAsBase64(file).then((res) => {
            this.createCommunity.nameFile=res[0];
            this.createCommunity.extFile=res[1];
        });
    }

    onSubmit():void{
        this.communitySubscription=this.communityService.insertCommunity(this.createCommunity).subscribe((_)=>{
            this.router.navigateByUrl("/events")
        })

    }
    ngOnDestroy(): void {
       this.communitySubscription?.unsubscribe();
       this.communityCategorySubscription?.unsubscribe();
       this.industrySubscription?.unsubscribe();
    }

    
}