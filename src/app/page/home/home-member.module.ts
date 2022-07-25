import { NgModule } from "@angular/core";
import { HomeMemberComponent } from "./member/home-member.component";
import { HomeMemberRouting } from "./home-member.routing";
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
        HomeMemberRouting,
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
        HomeMemberComponent
    ],
    exports: [
        HomeMemberComponent
    ]
})
export class HomeMemberModule {

}
