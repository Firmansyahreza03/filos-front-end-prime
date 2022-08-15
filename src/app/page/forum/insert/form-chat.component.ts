import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { DefaultPic } from '../../../constant/default-pic';
import {
  InsertThreadDtlReq,
} from '../../../pojo/pojo-import';
import { 
  LoginService, 
  ThreadDtlService, 
  UserService
} from '../../../service/import.service';
import { ForumDetailComponent } from '../detail/forum-detail.component';

@Component({
  selector: 'forum-form-chat',
  templateUrl: './form-chat.component.html',
  styleUrls: ['../forum.component.css'],
})
export class FormChatComponent implements OnInit, OnDestroy {
  subs ?: Subscription;
  proPic !:string;

  req: InsertThreadDtlReq = {
    isActive:true,
    hdrId : "",
    threadComment : ""
  };

  constructor(
    private loginService: LoginService,
    private userService: UserService,
    private threadDtlService: ThreadDtlService,
    private activatedRouted: ActivatedRoute,
    private router: Router,
    private threadDtl: ForumDetailComponent
  ) {}


  findPic() {
    const logUser = this.loginService.getLoggedEmail();
    if (logUser != null) {
      this.subs = this.userService.findByEmail(logUser)
        .subscribe(result => {
          if (result.data?.fileId != null) {
            this.proPic = 'http://localhost:3333/files/' + result.data?.fileId;
          } else {
            this.proPic = DefaultPic.proFile;
          }
        })
    }
  }

  ngOnInit(): void {
    this.subs = this.activatedRouted.params.subscribe(
      (result) => {
        const resultTmp: any = result;
        this.req.hdrId = resultTmp.id;
        this.findPic();
      }
    );
  }

  save() {
    this.subs = this.threadDtlService.insert(this.req)
      .subscribe(() => {
        this.threadDtl.findDataChat();
      })

      this.req.threadComment = ""
  }

  back(): void {
    this.router.navigateByUrl('/home-member');
  }

  ngOnDestroy(): void {
    this.subs?.unsubscribe();
  }
}
