import { Component, NgModule } from "@angular/core";
import { Router, RouterModule, Routes } from "@angular/router";
<<<<<<< HEAD
// import { IndustyAddComponent } from "./industy-add/industy-add.component";
// import { IndustyEditComponent } from "./industy-edit/industy-edit.component";
=======
import { IndustyAddComponent } from "./industy-add/industy-add.component";
>>>>>>> c69069cbd7f787a170192638d92d9780907dc9ba
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
