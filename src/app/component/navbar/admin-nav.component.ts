import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { MenuItem } from 'primeng/api';
import { AdminLayoutComponent } from '../layout/admin-layout.component';

@Component({
    selector: 'admin-nav',
    templateUrl: './admin-nav.component.html'
})
export class AdminNavComponent {

    items: MenuItem[] = [];

    constructor(public appMain: AdminLayoutComponent) { }
}
