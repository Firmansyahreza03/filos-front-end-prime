import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CommunityAddComponent } from "./community-add/community-add.component";
import { CommunityDetailComponent } from "./community-detail/community-detail.component";
import { CommunityListComponent } from "./community-list/community-list.component";
import { ReportYourCommunityComponent } from "./report/report-your-community.component";

const routes: Routes = [
    {
        path: '',
        component: CommunityListComponent
    },
    {
        path:'detail/:id',
        component: CommunityDetailComponent
    },
    {
        path:'add',
        component: CommunityAddComponent
    },
    {
        path:'report',
        component: ReportYourCommunityComponent
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

export class CommunityRouting {

}