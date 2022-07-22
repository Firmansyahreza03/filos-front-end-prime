import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { NavbarMemberComponent } from "./navbar-member.component";

import {MenubarModule} from 'primeng/menubar';
import {ButtonModule} from 'primeng/button';

@NgModule({
    declarations: [
        NavbarMemberComponent
    ],
    exports: [
        NavbarMemberComponent, RouterModule
    ],
    imports: [
        RouterModule,
        CommonModule,
        MenubarModule,
        ButtonModule
    ]
})
export class NavbarMemberModule{

}