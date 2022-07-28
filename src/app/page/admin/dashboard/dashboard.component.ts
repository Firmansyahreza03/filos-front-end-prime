import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Subscription } from 'rxjs';
 
@Component({
    templateUrl: './dashboard.component.html',
    styleUrls: ['../../../../sakai.scss']
})
export class DashboardComponent implements OnInit {

    subscription?: Subscription;

    constructor() {}

    ngOnInit() {
    }
}
