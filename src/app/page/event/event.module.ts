import { NgModule } from "@angular/core";
import { EventListComponent } from "./event-list/event-list.component";
import { EventRouting } from "./event.routing";
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
import { EventDetailComponent } from "./event-detail/event-detail.component";
import { EventAddComponent } from "./event-add/event-add.component";
import {CalendarModule} from 'primeng/calendar';
import {FileUploadModule} from 'primeng/fileupload';
import {HttpClientModule} from '@angular/common/http';
@NgModule({
    imports: [
        EventRouting,
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
        EventListComponent,
        EventDetailComponent,
        EventAddComponent
    ],
    exports: [
        EventListComponent,
        EventDetailComponent,
        EventAddComponent
    ]
})
export class EventModule{
    
}