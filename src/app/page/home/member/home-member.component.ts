import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormArray, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable, Subscription, toArray } from 'rxjs';
import { CommunityCategory } from 'src/app/constant/community-category';
import { DefaultPic } from 'src/app/constant/DefaultPic';
import {
  DataBookmark,
  DataThreadHdr,
  FindAllCommunityRes,
  FindAllThreadCategoryRes,
  FindAllThreadHdrRes,
  FindProfileRes,
  InsertThreadHdrReq,
  ErorRes,
  FindAllPollingOptionRes
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

@Component({
  selector: 'app-home-member',
  templateUrl: './home-member.component.html',
  styleUrls: ['home-member.component.css'],
})
export class HomeMemberComponent implements OnInit, OnDestroy {
  // kalimat:string="Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque doloribus assumenda accusantium asperiores sint, ex pariatur esse repellat id adipisci nobis ea deserunt. Quidem nostrum aspernatur labore, ea laudantium obcaecati.Veritatis labore nisi unde, ad natus minima mollitia ea ipsum corrupti error fugiat harum, rem eius praesentium ut similique aut perspiciatis inventore odit assumenda sequi quo numquam! Mollitia, animi sint?Aspernatur minima, illo dolor asperiores deserunt suscipit nobis soluta, odio sit veniam adipisci vitae esse! Soluta quaerat, consequatur praesentium ab accusamus id magni aliquam assumenda qui. Fugiat quos deserunt impedit.Voluptas minus ea veritatis harum officia sint magni deleniti quae beatae ipsam, tenetur pariatur eos praesentium culpa laudantium temporibus dolorem ratione sapiente quas. Delectus voluptates recusandae repellat est corrupti atque.Vero facilis quisquam deserunt sed illo laudantium adipisci. Commodi perferendis provident, neque sed repellendus accusamus quae fuga explicabo, vitae aspernatur vero voluptate debitis totam deleniti, in est sint autem quas!Animi esse saepe molestias fuga velit! Enim vero distinctio praesentium odit quibusdam, magnam fugit iusto saepe nulla ut explicabo corporis! Quos eius dolores unde quam quidem consequuntur reprehenderit molestiae voluptatum.    Rem voluptas, eius in, aliquam delectus quis sunt iste explicabo inventore nam expedita dolor soluta quas laudantium magnam? Placeat veritatis eos aliquam assumenda fugit aspernatur quidem vero harum neque sunt.    Quam, voluptas sint, ducimus maiores id nesciunt, nam facilis quaerat explicabo modi architecto corporis aspernatur ut quo eos obcaecati consequatur consequuntur optio vitae adipisci tempore. Itaque sunt aperiam iste aut!    Possimus, perspiciatis adipisci sequi quas vitae eaque dolorum, magnam, ab cumque debitis sapiente necessitatibus cupiditate nobis ex reiciendis modi sint repellendus aliquid ipsum amet vero eligendi tempora praesentium quos! Voluptates.    Ab vitae laboriosam atque possimus non delectus optio perspiciatis adipisci quae quas nesciunt nam architecto consequatur quos recusandae minus doloremque voluptate voluptatem enim at, ipsam excepturi consectetur nihil. Laborum, accusamus!"
  // count:number = this.kalimat.length;
  // textAfterMultiply:string= this.kalimat.slice(0,this.count*0.5)
  startPage: number = 0;
  maxPage: number = 5;
  threadSubscription?: Subscription;
  threadHdrListSubscription?: Subscription;
  threadHdrListByUserLoggedSubscription?: Subscription;
  profileThreadSubscription?: Subscription;
  threadCategorySubs?: Subscription;
  threadLikedSubs?: Subscription;
  bookmarkSubs?: Subscription;
  eventSubs?: Subscription;
  trainingSubs?: Subscription;
  threadLikedByUserLoggedSubs?: Subscription;
  profileSubs?: Subscription;
  threadBookmarkSubs?: Subscription;
  panelTab: string = 'myActivities';
  idDetail!: string;
  proPic!: string;
  displayModal!: boolean;
  polling!:boolean
  pollingArray = new FormArray([new FormControl('')]);
  expiredPolling!: Date;

  listThreadCategory: FindAllThreadCategoryRes = {
  };

  listThreadHdr: FindAllThreadHdrRes = {};

  listThreadHdrByUserLogged: FindAllThreadHdrRes = {};

  listEvent: FindAllCommunityRes = {};

  listTraining: FindAllCommunityRes = {};

  createThreadHdr: InsertThreadHdrReq = {};

  listThreadHdrLike: FindAllThreadHdrRes = {};

  profileData: FindProfileRes = {};

  bookmarkdata$ : Observable<DataThreadHdr[]> = this.store.select(getAllBookmark);

  dataPol?: string[];

  constructor(
    private threadCategoryService: ThreadCategoryService,
    private threadHdrService: ThreadHdrService,
    private loginService: LoginService,
    private likeThreadService: ThreadLikedService,
    private bookmarkService: BookmarkService,
    private communityService: CommunityService,
    private fileService: FileService,
    private router: Router,
    private userService: UserService,
    private store: Store,
  ) {}

  ngOnInit(): void {
    this.createThreadHdr.isActive = true;
    this.createThreadHdr.isPremium = false;
    this.createThreadHdr.email = this.loginService.getLoggedEmail()!;

    this.threadCategorySubs = this.threadCategoryService
      .getAllThreadCategory()
      .subscribe((result) => {
        this.listThreadCategory = result;
      });

    this.getProfile();
    this.getAllThread();
    this.getAllThreadByUserLogged();
    this.getAllEvent();
    this.getAllTraining();
    this.getAllThreadThatAreLikedByUserLogged();
    
    this.threadBookmarkSubs = this.threadHdrService.getThreadThatAreBookmarkedByUser(this.loginService.getLoggedEmail()!).subscribe((res)=>{
      this.store.dispatch(loadBookmarkAction({ payload: res.data!}));
    })
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
  }

  getProfile(): void{
    this.profileSubs = this.userService.findByEmail(this.loginService.getLoggedEmail()!).subscribe((res)=>{
      this.profileData = res;      
      if(this.profileData.data && this.profileData.data.fileId != null){
        this.proPic = 'http://localhost:3333/files/'+this.profileData.data.fileId;
      } else{
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
        this.loginService.getLoggedEmail()!,
        CommunityCategory.event,
        0,
        3
      )
      .subscribe((res) => {
        this.listEvent = res;
      });
  }

  getAllTraining(): void {
    this.trainingSubs = this.communityService
      .getByIndustryAndCategory(this.loginService.getLoggedEmail()!,CommunityCategory.training,0,3)
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
      .getAllThreadHdrByUserLogged(this.loginService.getLoggedEmail()!)
      .subscribe((result) => {        
        this.listThreadHdrByUserLogged = result;
      });
  }

  getAllThreadThatAreLikedByUserLogged(): void {
    this.threadLikedByUserLoggedSubs = this.threadHdrService
      .getThreadThatAreLikedByUser(this.loginService.getLoggedEmail()!)
      .subscribe((res) => {
        this.listThreadHdrLike = res;
      });
  }

  getAllThreadThatAreBookmarkedByUserLogged(): void {
    this.threadLikedByUserLoggedSubs = this.threadHdrService
      .getThreadThatAreBookmarkedByUser(this.loginService.getLoggedEmail()!)
      .subscribe((res) => {        
        this.listThreadHdrLike = res;
      });
  }

  onSubmit(): void {
    console.log(this.pollingArray.value);
    
    // this.pollingArray.setValue(this.dataPol!);
    // console.log(this.pollingArray);
    
    // this.threadSubscription = this.threadHdrService
    //   .insertThreadHdr(this.createThreadHdr)
    //   .subscribe(() => {
    //     this.getAllThread();
    //     this.getAllThreadByUserLogged();
    //   });
  }

  likeThread(id: string, index: number): void {
    this.threadLikedSubs = this.likeThreadService
      .likeThread(id, this.loginService.getLoggedEmail()!)
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
      .likeThread(id, this.loginService.getLoggedEmail()!)
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
      .bookmarkThread(id, this.loginService.getLoggedEmail()!)
      .subscribe((res) => {
        if(res.isBookmark == true){
          this.store.dispatch(bookmarkAction({payload: this.listThreadHdr.data![index]}))
        } else {
          this.store.dispatch(unbookmarkAction({ payload: id}))
        }
      });
  }

  onClick(id: string): void {
    this.idDetail = id;
    this.router.navigateByUrl(`/home-member/detail/${id}`);
  }

  onChangeFile(event: any): void {
    const file = event.files[0];
    this.fileService.uploadAsBase64(file).then((res) => {
      this.createThreadHdr.fileName = res[0];
      this.createThreadHdr.fileExt = res[1];
    });
  }

  checkPollling(event:any){
    const label = event.originalEvent.srcElement.innerText;
    console.log(label)

    if(label == "Polling")
      this.polling = true;
    else this.polling = false;
    console.log(this.polling)

  }

  showModalDialog() {
      this.displayModal = true;
  }
 
  addInputControl() {
    this.pollingArray.push(new FormControl('', Validators.required));
  }
  removeInputControl(idx: number) {
    this.pollingArray.removeAt(idx);
  }

  exitPolling() {
    this.polling = false;
  }

  clickPolling() {
    this.polling = true;
    this.pollingArray.reset();
  }

  toEditProfile(){
    this.router.navigateByUrl('/profile')
  }
}
