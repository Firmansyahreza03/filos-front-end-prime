import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ForumDetailComponent } from "./detail/forum-detail.component";

const routes : Routes=[
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