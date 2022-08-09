import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Subscription } from "rxjs";
import { DataThreadCategory, FindAllThreadCategoryRes, UpdateThreadHdrReq } from "src/app/pojo/pojo-import";
import { LoginService } from "src/app/service/login.service";
import { ThreadCategoryService } from "src/app/service/thread-category.service";
import { ThreadHdrService } from "src/app/service/thread-hdr.service";

@Component({
    selector:'app-edit-forum',
    templateUrl:'./edit-forum.component.html',
    styleUrls: ['../forum.component.css']
})
export class EditForumComponent implements OnInit{
    updateThreadSubscription?: Subscription;
    threadSubs?:Subscription;
    threadCategorySubs?:Subscription;
    idParam!:string;
    proPic!: string;
    listThreadCategory: DataThreadCategory[] = [];
    req:UpdateThreadHdrReq={}
    constructor(
        private threadCategoryService: ThreadCategoryService,
        private threadService:ThreadHdrService,
        private router: Router,
        private activitedRoute:ActivatedRoute,
        private loginService: LoginService,
      ) {}

    ngOnInit(): void {
        this.activitedRoute.params.subscribe(res=>{
            const resultTmp:any=res
            this.idParam=resultTmp.id
            this.req.id=this.idParam
            this.threadSubs=this.threadService.findThreadHdrById(this.idParam)
            .subscribe(result=>{                
                this.req.id=result.data?.id
                this.req.categoryId=result.data?.categoryid
                this.req.threadName=result.data?.threadName
                this.req.threadContent=result.data?.threadContent
                this.req.version=result.data?.version
                this.req.email=this.loginService.getLoggedEmail()!;              
            }) 
            this.getThreadCategory()
        })
    }
    getThreadCategory():void{
        this.threadCategorySubs = this.threadCategoryService
        .getAllThreadCategory()
        .subscribe((result) => {
            for(let i=0;i<result.data?.length!;i++){
                
                if(result.data![i].categoryName != "Polling"){
                    this.listThreadCategory.push(result.data![i]);
                }
            }

            console.log(this.listThreadCategory);
            
        });
    }
    onSubmit():void{        
        this.updateThreadSubscription = this.threadService
        .updateThreadHdr(this.req)
        .subscribe(result=>{
            this.router.navigateByUrl('/home-member')
        })
    }
    back():void{        
        this.router.navigateByUrl('/home-member')
    }
}