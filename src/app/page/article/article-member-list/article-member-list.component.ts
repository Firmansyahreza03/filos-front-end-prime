import { Component, OnDestroy, OnInit } from "@angular/core";
import { Title } from "@angular/platform-browser";
import { Router } from "@angular/router";
import { Subscription } from "rxjs";
import { FindAllArticleRes } from "src/app/pojo/pojo-import";
import { ArticleService } from "src/app/service/article.service";

@Component({
    selector:'app-article-member-list',
    templateUrl:'article-member-list.component.html',
    styleUrls:['./article-member-list.css']
})
export class ArticleMemberListComponent implements OnInit, OnDestroy{
    articleSubscription?:Subscription
    idDetail!:string
    showSpinner!:boolean;
    title = 'Articles';

    constructor(
        private router:Router,
        private articleService:ArticleService,
        private titleService:Title
    ){}
  
    listArticle:FindAllArticleRes={
        data: [],
        count: 0
    }

    ngOnInit(): void {
        this.titleService.setTitle(this.title)
        this.showSpinner=true;
        setTimeout(()=>{
            this.showSpinner=false;
            this.articleSubscription=this.articleService.getAll().subscribe((result)=>{
                this.listArticle=result
               })
        },500)
    }
    
    onDetail(id:string):void{
        this.router.navigateByUrl(`/articles/detail/${id}`)
    }
    ngOnDestroy(): void {
     this.articleSubscription?.unsubscribe()
    }

}