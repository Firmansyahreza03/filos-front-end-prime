import { NgModule } from "@angular/core";
import { Router, RouterModule, Routes } from "@angular/router";
import { ThreadDetailComponent } from "./thread-detail.component";

const routes: Routes=[
    {
        path: '',
        component: ThreadDetailComponent
    }
]

@NgModule({
    imports:[
       RouterModule.forChild(routes)
    ],
    exports:[
        RouterModule
    ]
})
export class ThreadDetailRouting{
    
}