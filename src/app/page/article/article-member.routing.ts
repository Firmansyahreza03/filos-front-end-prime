import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ArticleMemberDetailComponent } from "./article-member-detail/article-member-detail.component";
import { ArticleMemberListComponent } from "./article-member-list/article-member-list.component";

const routes:Routes=[
    {
        path:'',
        component: ArticleMemberListComponent
    },
    {
        path:'detail/:id',
        component: ArticleMemberDetailComponent
    }
]
@NgModule({
    imports:[
        RouterModule.forChild(routes)
    ],
    exports:[
        RouterModule
    ]
})
export class ArticleMemberRouting{
    
}