import { Component } from "@angular/core";

@Component({
    selector: 'app-home-member',
    templateUrl: './home-member.component.html',
    styleUrls:['home-member.component.css']
})
export class HomeMemberComponent{
    panelTab: string = 'myActivities'
    threadCategory=[
        {name: 'Everyone', code: 'T01'},
        {name: 'Premium', code: 'T05'}
    ];
}