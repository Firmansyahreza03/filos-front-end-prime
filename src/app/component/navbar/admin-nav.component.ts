import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import {MenuItem} from 'primeng/api';
import { AdminLayoutComponent } from '../layout/admin-layout.component';

@Component({
    selector: 'admin-nav',
    templateUrl: './admin-nav.component.html',
    styleUrls: ['../../../assets/sass/sakai.scss']
})
export class AdminNavComponent {

    items: MenuItem[] = [];

    constructor(public appMain: AdminLayoutComponent) { }
}
