import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";
import { UserRouting } from "./user.routing";

import { CardModule } from 'primeng/card';
import { TableModule } from 'primeng/table';
import { RippleModule } from 'primeng/ripple';
import { ButtonModule } from 'primeng/button';
import { DividerModule } from 'primeng/divider';
import { InputTextModule } from 'primeng/inputtext';
import { InputSwitchModule } from 'primeng/inputswitch';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { UserListComponent } from "./user-list/user-list.component";
import { UserDetailComponent } from './user-detail/user-detail.component';

@NgModule({
    declarations:[
        UserListComponent,
        UserDetailComponent
    ],
    imports:[
        UserRouting,
        CommonModule,
        FormsModule,
        HttpClientModule,
        
        CardModule,
        TableModule,
        ButtonModule,
        RippleModule,
        DividerModule,
        InputTextModule,
        InputSwitchModule,
        ConfirmDialogModule,
        InputTextareaModule
    ],
    exports :[
        UserListComponent,
        UserDetailComponent
    ]
})
export class UserModule{}