import { ReportComponent } from './main/report.component';
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { DividerModule } from 'primeng/divider';
import { InputTextModule } from 'primeng/inputtext';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { CalendarModule } from 'primeng/calendar';
import { ReportRouting } from './report.routing';
import { ScrollPanelModule } from 'primeng/scrollpanel';
import { DropdownModule } from 'primeng/dropdown';

import { ProgressSpinnerModule} from 'primeng/progressspinner';
@NgModule({
    declarations:[
        ReportComponent
    ],
    imports:[
        ReportRouting,
        CommonModule,
        FormsModule,
        HttpClientModule,

        CardModule,
        InputTextModule,
        InputTextareaModule,
        ButtonModule,
        DividerModule,
        CalendarModule,
        ConfirmDialogModule,
        DropdownModule,
        ScrollPanelModule,
        ProgressSpinnerModule
    ],
    exports :[
        ReportComponent
    ]
})
export class ReportModule{}