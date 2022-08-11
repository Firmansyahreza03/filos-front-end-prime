import { IndustyEditComponent } from './industry-edit/industy-edit.component';
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";
import { IndustyListComponent } from "./industry-list/industy-list.component";
import { IndustyRouting } from "./industry.routing";
import {DialogModule} from 'primeng/dialog';
import { CardModule } from 'primeng/card';
import { TableModule } from 'primeng/table';
import { RippleModule } from 'primeng/ripple';
import { ButtonModule } from 'primeng/button';
import { DividerModule } from 'primeng/divider';
import { InputTextModule } from 'primeng/inputtext';
import { InputSwitchModule } from 'primeng/inputswitch';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { IndustyAddComponent } from "./industry-add/industy-add.component";

import { ProgressSpinnerModule} from 'primeng/progressspinner';
@NgModule({
    declarations:[
        IndustyListComponent,
        IndustyAddComponent,
        IndustyEditComponent
    ],
    imports:[
        IndustyRouting,
        CommonModule,
        FormsModule,
        HttpClientModule,
        DialogModule,
        CardModule,
        TableModule,
        ButtonModule,
        RippleModule,
        DividerModule,
        InputTextModule,
        InputSwitchModule,
        ConfirmDialogModule,
        InputTextareaModule,
        ProgressSpinnerModule
    ],
    exports :[
        IndustyListComponent,
        IndustyAddComponent,
        IndustyEditComponent
    ]
})
export class IndustyModule{}