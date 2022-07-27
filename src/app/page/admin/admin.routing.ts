
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { SharedModule } from "primeng/api";
import { AdminComponent} from "./admin.component";
import { DashboardComponent } from "./dashboard/dashboard.component";

const routes : Routes=[
    {
        path: '', 
        component: DashboardComponent
    }
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