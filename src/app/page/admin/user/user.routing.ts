
import { Component, NgModule } from "@angular/core";
import { Router, RouterModule, Routes } from "@angular/router";
import { UserDetailComponent } from './user-detail/user-detail.component';
import { UserListComponent } from "./user-list/user-list.component";

const routes : Routes =[
    {
        path : '',
        component : UserListComponent
    },
    {
        path : 'dtl/:id',
        component : UserDetailComponent
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
