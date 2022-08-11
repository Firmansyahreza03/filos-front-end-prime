import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeNotMemberComponent } from "./not-member/home-not-member.component";

const routes : Routes=[
    {
        path:'',
        component: HomeNotMemberComponent
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
export class HomeNotMemberRouting{
    
}