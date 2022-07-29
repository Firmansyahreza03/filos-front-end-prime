import { Component, OnDestroy, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Subscription } from "rxjs";
import { FindAllCommunityRes } from "src/app/pojo/pojo-import";
import { CommunityService } from "src/app/service/community.service";

@Component({
    selector:'app-event-list',
    templateUrl:'./event-list.component.html',
    styleUrls:['event-list.component.css']
})
export class EventListComponent implements OnInit{
    constructor(
        private router: Router,
        private communityService: CommunityService,
        ){}
    eventSubscription?:Subscription

    listEvent:FindAllCommunityRes={
        data: [],
        count: 0
    }

    ngOnInit(): void {
        this.eventSubscription=this.communityService.getAllCommunity().subscribe((result)=>{
            this.listEvent=result
        })
    }
    onClick():void{
        this.router.navigateByUrl('/thread-detail')
    }
    ngOnDestroy(): void {
        this.eventSubscription?.unsubscribe()
    }
}