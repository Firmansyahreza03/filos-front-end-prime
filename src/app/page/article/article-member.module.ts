import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { DividerModule } from "primeng/divider";
import { ArticleMemberDetailComponent } from "./article-member-detail/article-member-detail.component";
import { ArticleMemberListComponent } from "./article-member-list/article-member-list.component";
import { ArticleMemberRouting } from "./article-member.routing";
import { SharedModule } from "../../component/shared.module";
import {ProgressSpinnerModule} from 'primeng/progressspinner';
@NgModule({
    imports:[
        ArticleMemberRouting,
        HttpClientModule,
        DividerModule,
        CommonModule,
        SharedModule,
        ProgressSpinnerModule
    ],
    declarations:[
      ArticleMemberListComponent,
      ArticleMemberDetailComponent,
    ],
    exports:[
        ArticleMemberListComponent,
        ArticleMemberDetailComponent
    ]
})
export class ArticleMemberModule{}