import { Component, OnDestroy, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Subscription } from "rxjs";
import { FindCommunityRes } from "src/app/pojo/pojo-import";
import { CommunityService } from "src/app/service/community.service";

@Component({
    selector:'app-community-detail',
    templateUrl:'./community-detail.component.html',
    styleUrls:['community-detail.component.css']
})
export class CommunityDetailComponent implements OnInit, OnDestroy{
    constructor(
        private router: Router,
        private communityService: CommunityService,
        private activatedRouted:ActivatedRoute
    ){}
 
    idParam!:string
    communityDtlSubscription?:Subscription
    communityData:FindCommunityRes={
    }

    ngOnInit(): void {
    this.communityDtlSubscription=this.activatedRouted.params.subscribe(result=>{
        const resultTmp:any=result
        this.idParam=resultTmp.id
        this.communityDtlSubscription=this.communityService.getCommunityById(this.idParam)
        .subscribe(result=>{
            this.communityData=result
        })
    })
    }

    back():void{
        this.router.navigateByUrl('/communities')
    }

    ngOnDestroy(): void {
        this.communityDtlSubscription?.unsubscribe()
    }
}