
import { Component, NgModule } from "@angular/core";
import { Router, RouterModule, Routes } from "@angular/router";
import { UserEditComponent } from './user-edit/user-edit.component';
import { UserAddComponent } from "./user-add/user-add.component";
import { UserListComponent } from "./user-list/user-list.component";

const routes : Routes =[
    {
        path : '',
        component : UserListComponent
    },
    {
        path : 'add',
        component : UserAddComponent
    },
    {
        path : 'edit/:id',
        component : UserEditComponent
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
export class UserRouting{}
