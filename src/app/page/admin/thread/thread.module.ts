3

import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";
import { ThreadRouting } from "./thread.routing";

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
import { ThreadListComponent } from "./thread-list/thread-list.component";

@NgModule({
    declarations:[
        ThreadListComponent
    ],
    imports:[
        ThreadRouting,
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
        ScrollPanelModule
    ],
    exports :[
        ThreadListComponent
    ]
})
export class ThreadModule{}