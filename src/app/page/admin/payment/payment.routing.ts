import { Component, NgModule } from "@angular/core";
import { Router, RouterModule, Routes } from "@angular/router";
import { ThreadListComponent } from "./payment-list/payment-list.component";

const routes : Routes =[
    {
        path : '',
        component : ThreadListComponent
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
export class ThreadRouting{}
