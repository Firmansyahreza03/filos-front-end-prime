import { NgModule } from "@angular/core";
import {HttpClientModule} from '@angular/common/http';
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import {DividerModule} from 'primeng/divider';
import {ButtonModule} from 'primeng/button';
import {InputTextModule} from 'primeng/inputtext';
import { DropdownModule } from 'primeng/dropdown';
import {PasswordModule} from 'primeng/password';
import { ProfileRouting } from "./profile.routing";
import { EditPasswordComponent } from "./edit-password/edit-password.component";
import { EditProfileComponent } from "./edit-profile/edit-profile.component";
import { MenuProfileComponent } from "./menu/menu-profile.component";
@NgModule({
    imports:[
        ProfileRouting,
        HttpClientModule,
        CommonModule,
        DividerModule,
        ButtonModule,
        InputTextModule,
        DropdownModule,
        PasswordModule,
        FormsModule
    ],
    declarations:[
        MenuProfileComponent,
        EditProfileComponent,
        EditPasswordComponent
    ],
    exports:[
        MenuProfileComponent,
        EditPasswordComponent,
        EditProfileComponent
    ]
})
export class ProfileModule{
    
}