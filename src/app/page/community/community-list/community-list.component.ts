import { Component, OnDestroy, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Subscription } from "rxjs";
import { FindAllCommunityRes } from "src/app/pojo/pojo-import";
import { CommunityService } from "src/app/service/community.service";

@Component({
    selector:'app-community-list',
    templateUrl:'./community-list.component.html',
    styleUrls:['community-list.component.css']
})
export class CommunityListComponent implements OnInit{
    constructor(
        private router: Router,
        private communityService: CommunityService,
        ){}
    communitySubscription?:Subscription
    idDetail!:string

    listCommunity:FindAllCommunityRes={
        data: [],
        count: 0
    }

    ngOnInit(): void {
        this.communitySubscription=this.communityService.getAllCommunity().subscribe((result)=>{
            this.listCommunity=result
            this.listCommunity.data.forEach(d => {
                const len = d.title.length
                if(len > 30) {
                    d.title = d.title.substring(0, 60) + " ...  " ;
                  }
            });
        })
    }
    onClick(id:string):void{
        this.idDetail = id;
        this.router.navigateByUrl(`/communities/detail/${id}`)
    }

    ngOnDestroy(): void {
        this.communitySubscription?.unsubscribe()
    }
}