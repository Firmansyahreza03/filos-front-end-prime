import { NgModule } from "@angular/core";
import { CommunityListComponent } from "./community-list/community-list.component";
import { CommunityRouting } from "./community.routing";
import {CardModule} from 'primeng/card';
import {TabViewModule} from 'primeng/tabview';
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import {DropdownModule} from 'primeng/dropdown';
import {InputTextModule} from 'primeng/inputtext';
import {InputTextareaModule} from 'primeng/inputtextarea';
import {ButtonModule} from 'primeng/button';
import {DividerModule} from 'primeng/divider';
import {CarouselModule} from 'primeng/carousel';
import {CommunityDetailComponent} from "./community-detail/community-detail.component";
import {CalendarModule} from 'primeng/calendar';
import {FileUploadModule} from 'primeng/fileupload';
import {HttpClientModule} from '@angular/common/http';
import { CommunityAddComponent } from "./community-add/community-add.component";
import {ProgressSpinnerModule} from 'primeng/progressspinner';
import { SharedModule } from "../../component/shared.module";
import { ReportYourCommunityComponent } from "./report/report-your-community.component";
import { ConfirmDialogModule } from "primeng/confirmdialog";
@NgModule({
    imports: [
        CommunityRouting,
        CardModule,
        TabViewModule,
        FormsModule,
        CommonModule,
        DropdownModule,
        InputTextModule,
        InputTextareaModule,
        ButtonModule,
        DividerModule,
        CarouselModule,
        CalendarModule,
        FileUploadModule,
        HttpClientModule,
        ProgressSpinnerModule,
        SharedModule,
        ConfirmDialogModule
    ],
    declarations: [
        CommunityListComponent,
        CommunityDetailComponent,
        CommunityAddComponent,
        ReportYourCommunityComponent
    ],
    exports: [
        CommunityListComponent,
        CommunityDetailComponent,
        CommunityAddComponent,
        ReportYourCommunityComponent
    ]
})
export class CommunityModule{
    
}