import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";

import {MenubarModule} from 'primeng/menubar';
import {ButtonModule} from 'primeng/button';
import {AvatarModule} from 'primeng/avatar';
import { NavbarComponent } from "./navbar/navbar.component";
import { FooterComponent } from "./footer/footer.component";

@NgModule({
    declarations : [
        NavbarComponent,
        FooterComponent
    ],
    imports : [
        RouterModule,
        CommonModule,
        FormsModule,

        MenubarModule,
        ButtonModule,
        AvatarModule
    ],  
    exports : [
        RouterModule,
        NavbarComponent,
        FooterComponent
    ]
})
export class SharedModule{}