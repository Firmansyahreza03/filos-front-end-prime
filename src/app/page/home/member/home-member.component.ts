import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { CommunityCategory } from 'src/app/constant/community-category';
import { DefaultPic } from 'src/app/constant/default-pic';
import {
  DataThreadHdr,
  FindAllCommunityRes,
  FindAllThreadCategoryRes,
  FindAllThreadHdrRes,
  FindProfileRes,
  InsertPollingAnswerReq,
  InsertThreadHdrReq,
} from 'src/app/pojo/pojo-import';
import { BookmarkService } from 'src/app/service/bookmark.service';
import { CommunityService } from 'src/app/service/community.service';
import { FileService } from 'src/app/service/file.service';
import { LoginService } from 'src/app/service/login.service';
import { ThreadCategoryService } from 'src/app/service/thread-category.service';
import { ThreadHdrService } from 'src/app/service/thread-hdr.service';
import { ThreadLikedService } from 'src/app/service/thread-liked.service';
import { UserService } from 'src/app/service/user.service';
import { Store } from '@ngrx/store'
import { getAllBookmark } from './home-member.selector';
import { bookmarkAction, loadBookmarkAction, unbookmarkAction } from './home-member.action';
import { PollingService } from 'src/app/service/polling.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-home-member',
  templateUrl: './home-member.component.html',
  styleUrls: ['home-member.component.css'],
})
export class HomeMemberComponent implements OnInit, OnDestroy {
  startPage: number = 0;
  maxPage: number = 5;

  threadSubscription ? : Subscription;
  threadHdrListSubscription ? : Subscription;
  threadHdrListByUserLoggedSubscription ? : Subscription;
  profileThreadSubscription ? : Subscription;
  threadCategorySubs ? : Subscription;
  threadLikedSubs ? : Subscription;
  bookmarkSubs ? : Subscription;
  eventSubs ? : Subscription;
  trainingSubs ? : Subscription;
  threadLikedByUserLoggedSubs ? : Subscription;
  profileSubs ? : Subscription;
  threadBookmarkSubs ? : Subscription;
  pollingAnswerSubs ? : Subscription;

  panelTab: string = 'myActivities';
  proPic!: string;
  pollingArray: string[] = [];
  expiredPolling!: Date;
  polling!: boolean
  inputDisable: boolean = false;
  title = 'Home Page';
  showSpinner: boolean = true;
  isLogin ? : boolean = this.loginService.isLogin();
  dataPol ? : string[];
  
  listThreadCategory: FindAllThreadCategoryRes = {};
  listThreadHdr: FindAllThreadHdrRes = {};
  listThreadHdrByUserLogged: FindAllThreadHdrRes = {};
  listEvent: FindAllCommunityRes = {};
  listTraining: FindAllCommunityRes = {};
  createThreadHdr: InsertThreadHdrReq = {};
  listThreadHdrLike: FindAllThreadHdrRes = {};
  profileData: FindProfileRes = {};
  bookmarkdata$: Observable < DataThreadHdr[] > = this.store.select(getAllBookmark);
  
  insertAnswerPolling: InsertPollingAnswerReq = {
    isActive: true,
    optionId: '',
  };

  constructor(
    private threadCategoryService: ThreadCategoryService,
    private threadHdrService: ThreadHdrService,
    private loginService: LoginService,
    private likeThreadService: ThreadLikedService,
    private bookmarkService: BookmarkService,
    private communityService: CommunityService,
    private fileService: FileService,
    private userService: UserService,
    private router: Router,
    private store: Store,
    private pollingService: PollingService,
    private titleService:Title,
  ) {}

  ngOnInit(): void {
    console.log(this.loginService.getRefreshToken());
    
    this.titleService.setTitle(this.title)
    this.threadCategorySubs = this.threadCategoryService
    .getAllThreadCategory()
      .subscribe((result) => {
        this.listThreadCategory = result;
      });
    this.getProfile();
    this.showSpinner=true;

    setTimeout(()=>{
      this.showSpinner=false;
      if(this.isLogin){
        this.createThreadHdr.isActive = true;
        this.createThreadHdr.email = this.loginService.getLoggedEmail()!;
        this.getAllThreadByUserLogged();
        this.getAllEvent();
        this.getAllTraining();
        this.getAllThreadThatAreLikedByUserLogged();
        this.getProfile();
        this.threadBookmarkSubs = this.threadHdrService.getThreadThatAreBookmarkedByUser(this.loginService.getLoggedEmail()!).subscribe((res)=>{
          this.store.dispatch(loadBookmarkAction({ payload: res.data!}));      
        })
      }
      this.getAllThread();
    },1000)
  }

  getPhotoCommun(fileId: string): string {
    if (fileId == null)  return DefaultPic.commFile;
    else return 'http://localhost:3333/files/' + fileId;
  }
  getPhotoThread(fileId: string): string {
    if (fileId == null) return DefaultPic.proFile;
    else return 'http://localhost:3333/files/' + fileId;
  }

  resetForm(): InsertThreadHdrReq {
    return this.createThreadHdr = {
      categoryId: "",
      email: this.loginService.getLoggedEmail() !,
      expiredAt: "",
      fileExt: "",
      fileName: "",
      isActive: true,
      options: [],
      pollingName: "",
      threadContent: "",
      threadName: "",
    }
  }

  toEditProfile() {
    this.router.navigateByUrl('/profile')
  }
  toEditThread(id: string) {
    this.router.navigateByUrl(`/forum/edit/${id}`);
  }
  onClick(id: string): void {
    this.router.navigateByUrl(`/forum/${id}`);
  }

  chooseOption(hdrId: string, pollingId: string): void {
    this.insertAnswerPolling.isActive = true;
    this.insertAnswerPolling.optionId = pollingId;
    this.pollingAnswerSubs = this.pollingService.insertAnswer(this.insertAnswerPolling).subscribe((res) => {
      console.log(res);
    })

    for (let i = 0; i < this.listThreadHdr.data?.length!; i++) {
      if (hdrId == this.listThreadHdr.data![i].id) {
        this.listThreadHdr.data![i].isVoted = true;
      }
    }

    for (let i = 0; i < this.listThreadHdrByUserLogged.data?.length!; i++) {
      if (hdrId == this.listThreadHdrByUserLogged.data![i].id) {
        this.listThreadHdrByUserLogged.data![i].isVoted = true;
      }
    }

    for (let i = 0; i < this.listThreadHdrLike.data?.length!; i++) {
      if (hdrId == this.listThreadHdrLike.data![i].id) {
        this.listThreadHdrLike.data![i].isVoted = true;
      }
    }
  }

  readMoreContent(content: string): string {
    const contentAfterEdit: string = content.slice(0, 100) + "...";
    return contentAfterEdit;
  }

  getProfile(): void {
    this.profileSubs = this.userService.findByEmail(this.loginService.getLoggedEmail() !).subscribe((res) => {
      this.profileData = res;
      if (this.profileData.data && this.profileData.data.fileId != null) {
        this.proPic = 'http://localhost:3333/files/' + this.profileData.data.fileId;
      } else {
        this.proPic = DefaultPic.proFile;
      }
    })
  }

  findTreadCategory(): void {
    this.threadCategoryService.getAllThreadCategory().subscribe((result) => {
      this.listThreadCategory = result;
    });
  }

  getAllEvent(): void {
    this.eventSubs = this.communityService
      .getByIndustryAndCategory(
        this.loginService.getLoggedEmail() !,
        CommunityCategory.event,
        0, 3
      )
      .subscribe((res) => {
        this.listEvent = res;
      });
  }

  getAllTraining(): void {
    this.trainingSubs = this.communityService
      .getByIndustryAndCategory(this.loginService.getLoggedEmail() !, CommunityCategory.training, 0, 3)
      .subscribe((res) => {
        this.listTraining = res;
      });
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
      .getAllThreadHdrByUserLogged(this.loginService.getLoggedEmail() !)
      .subscribe((result) => {
        this.listThreadHdrByUserLogged = result;
        console.log(this.listThreadHdrByUserLogged);

      });
  }

  getAllThreadThatAreLikedByUserLogged(): void {
    this.threadLikedByUserLoggedSubs = this.threadHdrService
      .getThreadThatAreLikedByUser(this.loginService.getLoggedEmail() !)
      .subscribe((res) => {
        this.listThreadHdrLike = res;
      });
  }

  getAllThreadThatAreBookmarkedByUserLogged(): void {
    this.threadLikedByUserLoggedSubs = this.threadHdrService
      .getThreadThatAreBookmarkedByUser(this.loginService.getLoggedEmail() !)
      .subscribe((res) => {
        this.listThreadHdrLike = res;
      });
  }

  onSubmit(): void {
    if (this.pollingArray.length != 0) {
      this.createThreadHdr.options = this.pollingArray;
    }

    this.threadSubscription = this.threadHdrService
      .insertThreadHdr(this.createThreadHdr)
      .subscribe(() => {
        this.getAllThread();
        this.getAllThreadByUserLogged();
      });
  }

  likeThread(id: string, index: number): void {
    this.threadLikedSubs = this.likeThreadService
      .likeThread(id, this.loginService.getLoggedEmail() !)
      .subscribe((res) => {
        if (res.isLiked == true && this.listThreadHdr.data![index].isLike == false) {
          this.listThreadHdr.data![index].isLike = true;
          let counter = parseInt(this.listThreadHdr.data![index].counterLike!) + 1;
          this.listThreadHdr.data![index].counterLike = counter.toString();
          const size = this.listThreadHdrByUserLogged.data!.length;
          for (let i = 0; i < size; i++) {
            if (this.listThreadHdrByUserLogged.data![i].id = this.listThreadHdr.data![index].id) {
              this.listThreadHdrByUserLogged.data![i].isLike = true;
              this.listThreadHdrByUserLogged.data![i].counterLike = counter.toString();
            }
          }
        } else {
          this.listThreadHdr.data![index].isLike = false;
          let counter = parseInt(this.listThreadHdr.data![index].counterLike!) - 1;
          this.listThreadHdr.data![index].counterLike = counter.toString();
          const size = this.listThreadHdrByUserLogged.data!.length;
          for (let i = 0; i < size; i++) {
            if (
              this.listThreadHdrByUserLogged.data![i].id == this.listThreadHdr.data![index].id
            ) {
              this.listThreadHdrByUserLogged.data![i].isLike = false;
              this.listThreadHdrByUserLogged.data![i].counterLike = counter.toString();
            }
          }
        }
        this.getAllThreadThatAreLikedByUserLogged();
      });
  }

  likeThreadLoggedUser(id: string, index: number): void {
    this.threadLikedSubs = this.likeThreadService
      .likeThread(id, this.loginService.getLoggedEmail() !)
      .subscribe((res) => {
        if (res.isLiked == true && this.listThreadHdrByUserLogged.data![index].isLike == false) {
          this.listThreadHdrByUserLogged.data![index].isLike = true;
          let counter = parseInt(this.listThreadHdrByUserLogged.data![index].counterLike!) + 1;
          this.listThreadHdrByUserLogged.data![index].counterLike = counter.toString();
          for (let i = 0; i < this.listThreadHdr.data!.length; i++) {
            if (
              this.listThreadHdrByUserLogged.data![index].id == this.listThreadHdr.data![i].id
            ) {
              this.listThreadHdr.data![i].counterLike = counter.toString();
              this.listThreadHdr.data![i].isLike = true;
            }
          }
        } else {
          this.listThreadHdrByUserLogged.data![index].isLike = false;
          let counter = parseInt(this.listThreadHdrByUserLogged.data![index].counterLike!) - 1;
          this.listThreadHdrByUserLogged.data![index].counterLike = counter.toString();
          const size = this.listThreadHdr.data!.length;
          for (let i = 0; i < size; i++) {
            if (
              this.listThreadHdrByUserLogged.data![index].id == this.listThreadHdr.data![i].id
            ) {
              this.listThreadHdr.data![i].counterLike = counter.toString();
              this.listThreadHdr.data![i].isLike = false;
            }
          }
        }
        this.getAllThreadThatAreLikedByUserLogged();
      });
  }

  bookmarkThread(id: string, index: number): void {
    this.bookmarkSubs = this.bookmarkService
      .bookmarkThread(id, this.loginService.getLoggedEmail() !)
      .subscribe((res) => {
        if (res.isBookmark == true) {
          this.store.dispatch(bookmarkAction({
            payload: {
              ...this.listThreadHdr.data![index]
            }
          }))
          this.listThreadHdr.data![index].isBookmark = true;

        } else {
          this.store.dispatch(unbookmarkAction({
            payload: id
          }))
          this.listThreadHdr.data![index].isBookmark = false;
        }
      });
  }

  onChangeFile(event: any): void {
    const file = event.files[0];
    this.fileService.uploadAsBase64(file).then((res) => {
      this.createThreadHdr.fileName = res[0];
      this.createThreadHdr.fileExt = res[1];
    });
  }

  checkPollling(event: any) {
    const label = event.originalEvent.srcElement.innerText;
    console.log(label)

    if (label == "Polling")
      this.polling = true;
    else this.polling = false;
    console.log(this.polling)
  }

  addInputControl(optionLabel: string) {
    this.pollingArray.push(optionLabel);
  }

  removeInputControl(index: number) {
    this.pollingArray.splice(index, 1);
  }

  changeValue(index: number, event: any) {
    const label = event.target.value;
    this.pollingArray[index] = label;
    console.log(this.pollingArray[index]);
    console.log(index);
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
    this.threadLikedByUserLoggedSubs?.unsubscribe();
    this.profileSubs?.unsubscribe();
    this.threadBookmarkSubs?.unsubscribe();
    this.pollingAnswerSubs?.unsubscribe();
  }
}
