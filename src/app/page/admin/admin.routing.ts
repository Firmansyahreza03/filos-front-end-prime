
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { SharedModule } from "primeng/api";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { IndustyModule } from "./industy/industy.module";

const routes : Routes=[
    {
      path: '',
      redirectTo: 'admin/home',
      pathMatch: 'full',
    },
    {
        path: 'home', 
        component: DashboardComponent
    },
    {
        path: 'industry', 
        component: IndustyModule,
        loadChildren: () => import('./industy/industy.module').then(m => m.IndustyModule)
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