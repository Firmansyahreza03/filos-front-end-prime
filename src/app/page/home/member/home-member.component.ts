import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription, toArray } from 'rxjs';
import { CommunityCategory } from 'src/app/constant/community-category';
import {
  FindAllCommunityRes,
  FindAllThreadCategoryRes,
  FindAllThreadHdrRes,
  InsertThreadHdrReq,
} from 'src/app/pojo/pojo-import';
import { BookmarkService } from 'src/app/service/bookmark.service';
import { CommunityService } from 'src/app/service/community.service';
import { LoginService } from 'src/app/service/login.service';
import { ThreadCategoryService } from 'src/app/service/thread-category.service';
import { ThreadHdrService } from 'src/app/service/thread-hdr.service';
import { ThreadLikedService } from 'src/app/service/thread-liked.service';

@Component({
  selector: 'app-home-member',
  templateUrl: './home-member.component.html',
  styleUrls: ['home-member.component.css'],
})
export class HomeMemberComponent implements OnInit, OnDestroy {
  // kalimat:string="Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque doloribus assumenda accusantium asperiores sint, ex pariatur esse repellat id adipisci nobis ea deserunt. Quidem nostrum aspernatur labore, ea laudantium obcaecati.Veritatis labore nisi unde, ad natus minima mollitia ea ipsum corrupti error fugiat harum, rem eius praesentium ut similique aut perspiciatis inventore odit assumenda sequi quo numquam! Mollitia, animi sint?Aspernatur minima, illo dolor asperiores deserunt suscipit nobis soluta, odio sit veniam adipisci vitae esse! Soluta quaerat, consequatur praesentium ab accusamus id magni aliquam assumenda qui. Fugiat quos deserunt impedit.Voluptas minus ea veritatis harum officia sint magni deleniti quae beatae ipsam, tenetur pariatur eos praesentium culpa laudantium temporibus dolorem ratione sapiente quas. Delectus voluptates recusandae repellat est corrupti atque.Vero facilis quisquam deserunt sed illo laudantium adipisci. Commodi perferendis provident, neque sed repellendus accusamus quae fuga explicabo, vitae aspernatur vero voluptate debitis totam deleniti, in est sint autem quas!Animi esse saepe molestias fuga velit! Enim vero distinctio praesentium odit quibusdam, magnam fugit iusto saepe nulla ut explicabo corporis! Quos eius dolores unde quam quidem consequuntur reprehenderit molestiae voluptatum.    Rem voluptas, eius in, aliquam delectus quis sunt iste explicabo inventore nam expedita dolor soluta quas laudantium magnam? Placeat veritatis eos aliquam assumenda fugit aspernatur quidem vero harum neque sunt.    Quam, voluptas sint, ducimus maiores id nesciunt, nam facilis quaerat explicabo modi architecto corporis aspernatur ut quo eos obcaecati consequatur consequuntur optio vitae adipisci tempore. Itaque sunt aperiam iste aut!    Possimus, perspiciatis adipisci sequi quas vitae eaque dolorum, magnam, ab cumque debitis sapiente necessitatibus cupiditate nobis ex reiciendis modi sint repellendus aliquid ipsum amet vero eligendi tempora praesentium quos! Voluptates.    Ab vitae laboriosam atque possimus non delectus optio perspiciatis adipisci quae quas nesciunt nam architecto consequatur quos recusandae minus doloremque voluptate voluptatem enim at, ipsam excepturi consectetur nihil. Laborum, accusamus!"
  // count:number = this.kalimat.length;
  // textAfterMultiply:string= this.kalimat.slice(0,this.count*0.5)
  threadSubscription?: Subscription;
  threadHdrListSubscription?: Subscription;
  threadHdrListByUserLoggedSubscription?: Subscription;
  profileThreadSubscription?: Subscription;
  threadCategorySubs?: Subscription;
  threadLikedSubs?: Subscription;
  bookmarkSubs?: Subscription;
  eventSubs?: Subscription;
  trainingSubs? : Subscription;
  panelTab: string = 'myActivities';

  listThreadCategory: FindAllThreadCategoryRes = {
    data: [],
  };

  listThreadHdr: FindAllThreadHdrRes = {
    data: [],
  };

  listThreadHdrByUserLogged: FindAllThreadHdrRes = {
    data: []
  };

  listEvent: FindAllCommunityRes = {
    data: []
  };
  
  listTraining: FindAllCommunityRes = {
    data: []
  };

  createThreadHdr: InsertThreadHdrReq = {};

  constructor(
    private threadCategoryService: ThreadCategoryService,
    private threadHdrService: ThreadHdrService,
    private loginService: LoginService,
    private likeThreadService: ThreadLikedService,
    private bookmarkService: BookmarkService,
    private communityService: CommunityService
  ) {}

  ngOnInit(): void {
    this.createThreadHdr.categoryId = 'f43dba1d-8a2a-45e4-a0da-f3eb7d688c9d';
    this.createThreadHdr.isActive = true;
    this.createThreadHdr.isPremium = false;
    this.createThreadHdr.email = this.loginService.getLoggedEmail()!;

    this.threadCategorySubs = this.threadCategoryService
      .getAllThreadCategory()
      .subscribe((result) => {
        this.listThreadCategory = result;
      });

    this.getAllThread();
    this.getAllThreadByUserLogged();
    this.getAllEvent();
    this.getAllTraining();
  }

  ngOnDestroy(): void {
    this.threadSubscription?.unsubscribe();
    this.threadHdrListSubscription?.unsubscribe();
    this.threadCategorySubs?.unsubscribe();
    this.threadHdrListByUserLoggedSubscription?.unsubscribe();
    this.profileThreadSubscription?.unsubscribe();
    this.threadLikedSubs?.unsubscribe();
    this.eventSubs?.unsubscribe();
    this.trainingSubs?.unsubscribe();
  }

  findTreadCategory(): void {
    this.threadCategoryService.getAllThreadCategory().subscribe((result) => {
      this.listThreadCategory = result;
    });
  }

  getAllEvent(): void {
    this.eventSubs = this.communityService.getByIndustryAndCategory(this.loginService.getLoggedEmail()!, CommunityCategory.event, 0, 3).subscribe((res)=>{
      this.listEvent = res;
    })
  }

  getAllTraining(): void {
    this.trainingSubs = this.communityService.getByIndustryAndCategory(this.loginService.getLoggedEmail()!, CommunityCategory.training, 0, 3).subscribe((res)=>{
      this.listTraining = res;
    })
  }

  getAllThread(): void {
    this.threadHdrListSubscription = this.threadHdrService
      .getAllThreadHdr()
      .subscribe((result) => {
        this.listThreadHdr = result;
      });
  }

  getAllThreadByUserLogged(): void {
    this.threadHdrListByUserLoggedSubscription = this.threadHdrService
      .getAllThreadHdrByUserLogged(this.loginService.getLoggedEmail()!)
      .subscribe((result) => {
        this.listThreadHdrByUserLogged = result;
      });
  }

  onSubmit(): void {
    this.threadSubscription = this.threadHdrService
      .insertThreadHdr(this.createThreadHdr)
      .subscribe(() => {
        this.getAllThread();
        this.getAllThreadByUserLogged();
      });
  }

  likeThread(id: string, index: number): void {
    this.threadLikedSubs = this.likeThreadService
      .likeThread(id, this.loginService.getLoggedEmail()!)
      .subscribe((res) => {
        if (res.isLiked == true) {
          let counter = parseInt(this.listThreadHdr.data[index].counterLike!) + 1;
          this.listThreadHdr.data[index].counterLike = counter.toString();
          for (let i = 0; i < this.listThreadHdrByUserLogged.data.length; i++) {
            if (
              this.listThreadHdrByUserLogged.data[i].id = this.listThreadHdr.data[index].id
            ) {
              this.listThreadHdrByUserLogged.data[i].counterLike = counter.toString();
            }
          }
        } else {
          let counter = parseInt(this.listThreadHdr.data[index].counterLike!) - 1;
          this.listThreadHdr.data[index].counterLike = counter.toString();
          for (let i = 0; i < this.listThreadHdrByUserLogged.data.length; i++) {
            if (
              this.listThreadHdrByUserLogged.data[i].id == this.listThreadHdr.data[index].id
            ) {
              this.listThreadHdrByUserLogged.data[i].counterLike = counter.toString();
            }
          }
        }
      });
  }

  likeThreadLoggedUser(id: string, index: number): void {
    this.threadLikedSubs = this.likeThreadService
      .likeThread(id, this.loginService.getLoggedEmail()!)
      .subscribe((res) => {
        if (res.isLiked == true) {
          let counter = parseInt(this.listThreadHdrByUserLogged.data[index].counterLike!) + 1;
          this.listThreadHdrByUserLogged.data[index].counterLike = counter.toString();
          for (let i = 0; i < this.listThreadHdr.data.length; i++) {
            if (
              this.listThreadHdrByUserLogged.data[index].id == this.listThreadHdr.data[i].id
            ) {
              this.listThreadHdr.data[i].counterLike = counter.toString();
            }
          }
        } else {
          let counter = parseInt(this.listThreadHdrByUserLogged.data[index].counterLike!) - 1;
          this.listThreadHdrByUserLogged.data[index].counterLike = counter.toString();
          for (let i = 0; i < this.listThreadHdr.data.length; i++) {
            if (
              this.listThreadHdrByUserLogged.data[index].id ==
              this.listThreadHdr.data[i].id
            ) {
              this.listThreadHdr.data[i].counterLike = counter.toString();
            }
          }
        }
      });
  }

  bookmarkThread(id: string): void {
    this.bookmarkSubs = this.bookmarkService
      .bookmarkThread(id, this.loginService.getLoggedEmail()!)
      .subscribe(() => {});
  }
}
