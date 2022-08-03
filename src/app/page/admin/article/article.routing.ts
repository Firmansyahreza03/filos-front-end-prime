
import { Component, NgModule } from "@angular/core";
import { Router, RouterModule, Routes } from "@angular/router";
import { ArticleEditComponent } from './article-edit/article-edit.component';
import { ArticleAddComponent } from "./article-add/article-add.component";
import { ArticleListComponent } from "./article-list/article-list.component";

const routes : Routes =[
    {
        path : '',
        component : ArticleListComponent
    },
    {
        path : 'add',
        component : ArticleAddComponent
    },
    {
        path : 'edit/:id',
        component : ArticleEditComponent
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
export class ArticleRouting{}
