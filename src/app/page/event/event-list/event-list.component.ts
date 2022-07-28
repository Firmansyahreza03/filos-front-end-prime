import { Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({
    selector:'app-event-list',
    templateUrl:'./event-list.component.html',
    styleUrls:['event-list.component.css']
})
export class EventListComponent{
    constructor(private router: Router){}
    onClick():void{
        this.router.navigateByUrl('/thread-detail')
    }
}