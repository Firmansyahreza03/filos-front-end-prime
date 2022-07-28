import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Subscription } from 'rxjs';
import { FileService } from '../../../service/file.service';
 
@Component({
    templateUrl: './dashboard.component.html',
    styleUrls: ['../../../../assets/sass/sakai.scss']
})
export class DashboardComponent implements OnInit {
    // assets/sass/sakai.scss
    subscription?: Subscription;
    
    constructor() {}

    ngOnInit() {
    }
}
