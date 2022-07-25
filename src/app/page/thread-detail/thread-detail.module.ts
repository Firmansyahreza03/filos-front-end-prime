import { NgModule } from "@angular/core";
import { ThreadDetailComponent } from "./thread-detail.component";
import { ThreadDetailRouting } from "./thread-detail.routing";
import {ButtonModule} from 'primeng/button';
import {BreadcrumbModule} from 'primeng/breadcrumb';

@NgModule({
    imports:[
        ThreadDetailRouting,
        ButtonModule,
        BreadcrumbModule
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