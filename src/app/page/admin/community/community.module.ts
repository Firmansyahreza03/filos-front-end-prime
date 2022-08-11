

import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";
import { CommunityRouting } from "./community.routing";

import { CardModule } from 'primeng/card';
import { TableModule } from 'primeng/table';
import { RippleModule } from 'primeng/ripple';
import { ButtonModule } from 'primeng/button';
import { DividerModule } from 'primeng/divider';
import { InputTextModule } from 'primeng/inputtext';
import { InputSwitchModule } from 'primeng/inputswitch';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { DropdownModule } from "primeng/dropdown";
import { ScrollPanelModule } from 'primeng/scrollpanel';
import { CommunityListComponent } from "./community-list/community-list.component";

import { ProgressSpinnerModule} from 'primeng/progressspinner';
@NgModule({
    declarations:[
        CommunityListComponent
    ],
    imports:[
        CommunityRouting,
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
        InputTextareaModule,
        DropdownModule,
        ScrollPanelModule,
        ProgressSpinnerModule
    ],
    exports :[
        CommunityListComponent
    ]
})
export class CommunityModule{}