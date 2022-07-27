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
        DividerModule
    ],
    declarations: [
        EventListComponent
    ],
    exports: [
        EventListComponent
    ]
})
export class EventModule{
    
}