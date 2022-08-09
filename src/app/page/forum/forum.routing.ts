import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ForumDetailComponent } from "./detail/forum-detail.component";
import { EditForumComponent } from "./edit/edit-forum.component";

const routes : Routes=[
    {
        path:'edit/:id',
        component:EditForumComponent
    },
    {
        path:':id',
        component:ForumDetailComponent
    },
]
@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class ForumRouting{}