import { NgModule } from "@angular/core";
import { EditPasswordComponent } from "./edit-password/edit-password.component";
import { EditProfileComponent } from "./edit-profile/edit-profile.component";
import { ProfileRouting } from "./profile.routing";
import {HttpClientModule} from '@angular/common/http';
import { CommonModule } from "@angular/common";
import {DividerModule} from 'primeng/divider';
import {ButtonModule} from 'primeng/button';
import {InputTextModule} from 'primeng/inputtext';
import { DropdownModule } from 'primeng/dropdown';
import {PasswordModule} from 'primeng/password';
@NgModule({
    imports:[
        ProfileRouting,
        HttpClientModule,
        CommonModule,
        DividerModule,
        ButtonModule,
        InputTextModule,
        DropdownModule,
        PasswordModule
    ],
    declarations:[
        EditProfileComponent,
        EditPasswordComponent
    ],
    exports:[
        EditPasswordComponent,
        EditProfileComponent
    ]
})
export class ProfileModule{
    
}