import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ArticleService, CommunityService, ThreadHdrService, UserService } from './../../../service/import.service';

@Component({
    templateUrl: './dashboard.component.html',
    styleUrls: ['../../../../assets/sass/sakai.scss']
})
export class DashboardComponent implements OnInit {
    subscription?: Subscription;

    sumUser:number = 0 ;
    sumCommunity:number = 0 ;
    sumArticle:number = 0 ;
    sumThread:number = 0 ;

    constructor(
        private userService: UserService,
        private communityService: CommunityService,
        private articleService: ArticleService,
        private threadService: ThreadHdrService,
        ) {}

    countUser():void{
        this.subscription = this.userService.getAll()
        .subscribe((result) => {
            console.log(result)
          this.sumUser = result.data!.length;
        });
    }

    countCommunity():void{
        this.subscription = this.communityService.getAll()
        .subscribe((result) => {
            console.log(result)
          this.sumCommunity = result.data!.length;
        });
    }

    countArticle():void{
        this.subscription = this.articleService.getAll()
        .subscribe((result) => {
            console.log(result)
          this.sumArticle = result.data!.length;
        });
    }

    countThread():void{
        this.subscription = this.threadService.getAllThreadHdr()
        .subscribe((result) => {
            console.log(result)
          this.sumThread = result.data!.length;
        });
    }

    ngOnInit() {
        this.countUser();
        this.countArticle();
        this.countThread();
        this.countCommunity();
        
    }
    ngOnDestroy(): void {
        this.subscription?.unsubscribe();
    }
}
