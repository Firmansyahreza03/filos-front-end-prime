import { NgModule } from "@angular/core";
import { ThreadDetailComponent } from "./thread-detail.component";
import { ThreadDetailRouting } from "./thread-detail.routing";
import {ButtonModule} from 'primeng/button';
import {BreadcrumbModule} from 'primeng/breadcrumb';
import {CardModule} from 'primeng/card';
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import {InputTextModule} from 'primeng/inputtext';
import {InputTextareaModule} from 'primeng/inputtextarea';
import {DividerModule} from 'primeng/divider';
@NgModule({
    imports:[
        ThreadDetailRouting,
        ButtonModule,
        BreadcrumbModule,
        CardModule,
        FormsModule,
        CommonModule,
        InputTextModule,
        InputTextareaModule,
        DividerModule
    ],
    declarations:[
        ThreadDetailComponent
    ],
    exports:[
        ThreadDetailComponent
    ]
})
export class ThreadDetailModule{
    
}