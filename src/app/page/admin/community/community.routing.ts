
import { Component, NgModule } from "@angular/core";
import { Router, RouterModule, Routes } from "@angular/router";
import { CommunityListComponent } from "./community-list/community-list.component";

const routes : Routes =[
    {
        path : '',
        component : CommunityListComponent
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
export class CommunityRouting{}
