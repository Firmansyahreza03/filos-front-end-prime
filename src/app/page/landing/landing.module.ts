import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { LandingRouting} from "./landing.routing";
import {CardModule} from 'primeng/card';
import {ImageModule} from 'primeng/image';
import {ButtonModule} from 'primeng/button';
import {InputTextModule} from 'primeng/inputtext';
import { LandingComponent } from "./landing.component";

import { DividerModule } from 'primeng/divider';

@NgModule({
    imports: [
        LandingRouting,
        FormsModule,
        CardModule,
        ImageModule,
        InputTextModule,
        ButtonModule,
        DividerModule  
    ],
    declarations: [
      LandingComponent

    ],
    exports: [
       LandingComponent
    ]
})
export class LandingModule{

}