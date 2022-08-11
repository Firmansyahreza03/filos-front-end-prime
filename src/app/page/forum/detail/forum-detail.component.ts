import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { DefaultPic } from 'src/app/constant/default-pic';
import {
  FindAllThreadDtlRes,
  FindThreadDtlRes,
  FindThreadHdrRes,
} from 'src/app/pojo/pojo-import';
import { 
  LoginService, 
  ThreadDtlService, 
  ThreadHdrService, 
  UserService
} from 'src/app/service/import.service';

@Component({
  selector: 'app-forum-detail',
  templateUrl: './forum-detail.component.html',
  styleUrls: ['../forum.component.css'],
})
export class ForumDetailComponent implements OnInit, OnDestroy {
  idParam!: string;
  countChat: number = 0 ;

  hdrSubs ? : Subscription;
  dtlSubs ? : Subscription;
  userSubs ? : Subscription;

  threadHdrData: FindThreadHdrRes = {};
  threadDtlData: FindAllThreadDtlRes = {};
  isLogin?: boolean = this.loginService.isLogin();

  constructor(
    private loginService: LoginService,
    private userService: UserService,
    private threadHdrService: ThreadHdrService,
    private threadDtlService: ThreadDtlService,
    private activatedRouted: ActivatedRoute,
    private router: Router
  ) {}

  findDataHeader(): void {
    this.hdrSubs = this.activatedRouted.params.subscribe(
      (result) => {
        const resultTmp: any = result;
        this.idParam = resultTmp.id;

        this.hdrSubs = this.threadHdrService
          .findThreadHdrById(this.idParam)
          .subscribe((result) => {
            if (result.data == null) {
              this.router.navigateByUrl('/payment');
            } else {
              this.threadHdrData = result;
              if (this.threadHdrData.data!.photoProfileCreator != null)
                this.threadHdrData.data!.photoProfileCreator = 'http://localhost:3333/files/' +
                this.threadHdrData.data?.photoProfileCreator;
              else
                this.threadHdrData.data!.photoProfileCreator = DefaultPic.proFile;
            }
          });
      }
    );
  }

  findDataChat(): void {
    console.log(this.idParam)
    this.dtlSubs = this.threadDtlService
      .findByHdrId(this.idParam)
      .subscribe((result) => {
        this.threadDtlData = result;
        this.countChat = 0;
        for (let i = 0; i < this.threadDtlData.data!.length; i++) {
          this.countChat++;
          this.userSubs = this.userService.findByUserId(this.threadDtlData.data![i].userId!).subscribe((res) => {
            const tempData = res.data;
            if (tempData?.userEmail == this.loginService.getLoggedEmail())
              this.threadDtlData.data![i].isFromMe = true;
            else
              this.threadDtlData.data![i].isFromMe = false;

            if (tempData?.fileId != null)
              this.threadDtlData.data![i].proPic = 'http://localhost:3333/files/' + tempData?.fileId;
            else
              this.threadDtlData.data![i].proPic = DefaultPic.proFile;
          })
          console.log(this.threadDtlData)
        }
      });
  }

  ngOnInit(): void {
    this.findDataHeader();
    this.findDataChat();
  }

  back(): void {
    this.router.navigateByUrl('/home-member');
  }

  ngOnDestroy(): void {
    this.hdrSubs?.unsubscribe();
    this.dtlSubs?.unsubscribe();
    this.userSubs?.unsubscribe();
  }
}
