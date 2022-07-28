import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { MenuItem } from 'primeng/api';
import { AdminLayoutComponent } from '../layout/admin-layout.component';
import { Router } from '@angular/router';

@Component({
    selector: 'admin-sidebar',
    templateUrl: './admin-sidebar.component.html',
    styleUrls: ['../../../sakai.scss', './admin-sidebar.component.css']
})
export class AdminSidebarComponent {
    items!: MenuItem[]

    constructor(
        private router: Router
    ) { }

    ngOnInit() {
        this.items = [
            {
                label: 'Home',
                items: [{
                    label: 'Dashboard',
                    icon: 'pi pi-home',
                    routerLink: '/admin'
                }]
            }
        ]
    }
}
