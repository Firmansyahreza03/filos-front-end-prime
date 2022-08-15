import { Component, OnDestroy, OnInit } from "@angular/core";
import { Title } from "@angular/platform-browser";
import { ActivatedRoute, Router } from "@angular/router";
import { Subscription } from "rxjs";
import { FindArticleRes } from "../../../pojo/pojo-import";
import { ArticleService } from "../../../service/article.service";

@Component({
    selector:'app-article-member-detail',
    templateUrl:'./article-member-detail.component.html',
    styleUrls:['article-member-detail.component.css']
})
export class ArticleMemberDetailComponent implements OnInit, OnDestroy{
    idParam!:string
    articleDtlSubscription?:Subscription
    articleData!:FindArticleRes;
    showSpinner!:boolean;

    constructor(
        private router:Router,
        private articleService:ArticleService,
        private activatedRouted:ActivatedRoute,
        private titleService:Title
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
                    this.titleService.setTitle(this.articleData.data.title)
                })
            }
        )
    }
    ngOnInit(): void {
        this.showSpinner=true;
        setTimeout(()=>{
            this.showSpinner=false;
            this.getDtlData();
        },500)
    }
    back():void{
        this.router.navigateByUrl('/articles')
    }
    ngOnDestroy(): void {
        this.articleDtlSubscription?.unsubscribe()
    }
  
}