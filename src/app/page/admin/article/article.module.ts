import { ArticleEditComponent } from './article-edit/article-edit.component';
import { ArticleListComponent } from "./article-list/article-list.component";
import { ArticleAddComponent } from './article-add/article-add.component';

import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";
import { ArticleRouting } from "./article.routing";

import { CardModule } from 'primeng/card';
import { TableModule } from 'primeng/table';
import { RippleModule } from 'primeng/ripple';
import { ButtonModule } from 'primeng/button';
import { DividerModule } from 'primeng/divider';
import { InputTextModule } from 'primeng/inputtext';
import { InputSwitchModule } from 'primeng/inputswitch';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { DropdownModule } from "primeng/dropdown";
@NgModule({
    declarations:[
        ArticleListComponent,
        ArticleAddComponent,
        ArticleEditComponent
    ],
    imports:[
        ArticleRouting,
        CommonModule,
        FormsModule,
        HttpClientModule,
        
        CardModule,
        TableModule,
        ButtonModule,
        RippleModule,
        DividerModule,
        InputTextModule,
        InputSwitchModule,
        ConfirmDialogModule,
        InputTextareaModule,
        DropdownModule
    ],
    exports :[
        ArticleListComponent,
        ArticleAddComponent,
        ArticleEditComponent
    ]
})
export class ArticleModule{}