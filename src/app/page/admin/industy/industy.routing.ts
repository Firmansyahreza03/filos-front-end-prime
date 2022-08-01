
import { Component, NgModule } from "@angular/core";
import { Router, RouterModule, Routes } from "@angular/router";
import { IndustyEditComponent } from './industy-edit/industy-edit.component';
import { IndustyAddComponent } from "./industy-add/industy-add.component";
import { IndustyListComponent } from "./industy-list/industy-list.component";

const routes : Routes =[
    {
        path : '',
        component : IndustyListComponent
    },
    {
        path : 'add',
        component : IndustyAddComponent
    },
    {
        path : 'edit/:id',
        component : IndustyEditComponent
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
export class IndustyRouting{}
