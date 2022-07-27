import { Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({
    selector: 'app-admin',
    template: `
    <div class="layout-wrapper">
        <div class="layout-sidebar">
            <admin-menu></admin-menu>
        </div>
        <div class="layout-main-container">
            <div class="layout-main">
                <router-outlet></router-outlet>
            </div>
            <admin-footer></admin-footer>
        </div>
    </div>
    `
})
export class AdminComponent{
    constructor(public router: Router){}
}