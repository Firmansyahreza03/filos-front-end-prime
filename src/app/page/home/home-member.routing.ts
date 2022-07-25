import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeMemberComponent } from "./member/home-member.component";

const routes : Routes=[
    {
        path:'',
        component: HomeMemberComponent
    }
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