import { CommonModule } from "@angular/common";
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";

import { AvatarModule } from 'primeng/avatar';
import { ButtonModule } from 'primeng/button';
import { MenubarModule } from 'primeng/menubar';
import { RippleModule } from 'primeng/ripple';

import { NavbarComponent } from "./navbar/navbar.component";
import { FooterComponent } from "./footer/footer.component";
import { AdminNavComponent } from "./navbar/admin-nav.component";
import { MainLayoutComponent } from "./layout/main-layout.component";
import { AdminLayoutComponent } from "./layout/admin-layout.component";
import { AdminSidebarComponent } from "./navbar/admin-sidebar.component";
import { AppMenuitemComponent } from "./navbar/app-menuitem.component";

@NgModule({
    declarations : [
        FooterComponent,
        NavbarComponent,
        AdminNavComponent,
        MainLayoutComponent,
        AdminLayoutComponent,
        AdminSidebarComponent,
        AppMenuitemComponent
    ],
    imports : [
        RouterModule,
        CommonModule,
        FormsModule,

        MenubarModule,
        ButtonModule,
        AvatarModule,
        RippleModule,
    ],  
    exports : [
        RouterModule,
        FooterComponent,
        NavbarComponent,
        AdminNavComponent,
        MainLayoutComponent,
        AdminLayoutComponent,
        AdminSidebarComponent,
        AppMenuitemComponent
    ],
    schemas: [
        CUSTOM_ELEMENTS_SCHEMA
    ]
})
export class SharedModule{}