
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { SharedModule } from "primeng/api";
import { DashboardComponent } from "./dashboard/dashboard.component";

const routes : Routes=[
    {
        path: '', 
        component: DashboardComponent
    },
    {
        path: 'industry', 
        loadChildren: () => import('./industy/industry.module').then(m => m.IndustyModule)
    },
    {
        path: 'user', 
        loadChildren: () => import('./user/user.module').then(m => m.UserModule)
    },
]
@NgModule({
    imports: [
        RouterModule.forChild(routes),
        SharedModule
    ],
    exports: [
        RouterModule
    ]
})
export class AdminRouting{

}