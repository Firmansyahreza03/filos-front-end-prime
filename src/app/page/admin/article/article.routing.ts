
import { Component, NgModule } from "@angular/core";
import { Router, RouterModule, Routes } from "@angular/router";
import { ArticleDtlComponent } from './article-dtl/article-dtl.component';
import { ArticleEditComponent } from './article-edit/article-edit.component';
import { ArticleListComponent } from "./article-list/article-list.component";
import { ArticleAddComponent } from './article-add/article-add.component';

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
    },
    {
        path : 'dtl/:id',
        component : ArticleDtlComponent
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
