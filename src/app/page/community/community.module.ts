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
        HttpClientModule
    ],
    declarations: [
        CommunityListComponent,
        CommunityDetailComponent,
        CommunityAddComponent
    ],
    exports: [
        CommunityListComponent,
        CommunityDetailComponent,
        CommunityAddComponent
    ]
})
export class CommunityModule{
    
}