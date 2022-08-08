import { Component, OnDestroy, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Subscription } from "rxjs";
import { FindArticleRes } from "src/app/pojo/pojo-import";
import { ArticleService } from "src/app/service/article.service";

@Component({
    selector:'app-article-member-detail',
    templateUrl:'./article-member-detail.component.html',
    styleUrls:['article-member-detail.component.css']
})
export class ArticleMemberDetailComponent implements OnInit, OnDestroy{
    idParam!:string
    articleDtlSubscription?:Subscription
    articleData!:FindArticleRes;

    constructor(
        private router:Router,
        private articleService:ArticleService,
        private activatedRouted:ActivatedRoute
    ){}
  

    getDtlData():void{
        this.articleDtlSubscription=this.activatedRouted.params.subscribe(
            (result)=>{
                const resultTmp:any=result;
                this.idParam=resultTmp.id;
                this.articleDtlSubscription=this.articleService
                .findById(this.idParam)
                .subscribe((result)=>{
                    this.articleData=result;
                })
            }
        )
    }
    ngOnInit(): void {
        this.getDtlData();
    }
    back():void{
        this.router.navigateByUrl('/articles')
    }
    ngOnDestroy(): void {
        this.articleDtlSubscription?.unsubscribe()
    }
  
}