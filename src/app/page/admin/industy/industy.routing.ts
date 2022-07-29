import { Component, NgModule } from "@angular/core";
import { Router, RouterModule, Routes } from "@angular/router";
import { IndustyListComponent } from "./industy-list/industy-list.component";

const routes : Routes =[
    {
        path : '',
        component : IndustyListComponent
    },
    // {
    //     path : 'add',
    //     component : IndustyAddComponent
    // },
    // {
    //     path : 'edit/:id',
    //     component : IndustyEditComponent
    // }
]

@NgModule({
    imports:[
        RouterModule.forChild(routes)
    ],
    exports:[
        RouterModule
    ]
})
export class IndustyRouting{}
