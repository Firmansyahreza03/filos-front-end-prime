import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeMemberComponent } from "./member/home-member.component";
import { ThreadDetailComponent } from "./thread-detail/thread-detail.component";

const routes : Routes=[
    {
        path:'',
        component: HomeMemberComponent
    },
    {
        path:'detail/:id',
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
export class HomeMemberRouting{}