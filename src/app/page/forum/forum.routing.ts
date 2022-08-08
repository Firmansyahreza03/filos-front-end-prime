import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ThreadDetailComponent } from "./detail/thread-detail.component";

const routes : Routes=[
    {
        path:':id',
        component:ThreadDetailComponent
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