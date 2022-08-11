import { Component, OnInit } from "@angular/core";
import { Title } from "@angular/platform-browser";
import { Subscription } from 'rxjs';
import { DefaultPic } from "src/app/constant/default-pic";
import { FileService, LoginService, ThreadHdrService, UserService } from "src/app/service/import.service";
import { FindAllThreadHdrRes } from 'src/app/pojo/pojo-import';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-not-member',
  templateUrl: './home-not-member.component.html',
  styleUrls: ['home-not-member.component.css']
})

export class HomeNotMemberComponent {
  proPic!: string;
  title = 'Home Page';
  subs?: Subscription;
  showSpinner: boolean = true;

  listThreadHdr: FindAllThreadHdrRes = {};

  constructor(
    private router: Router,
    private threadHdrService: ThreadHdrService,
    private titleService:Title
  ) {}

  onClick(id: string): void {
    this.router.navigateByUrl(`/forum/${id}`);
  }

  getPhotoThread(fileId: string): string {
    if (fileId == null) {
      return DefaultPic.proFile;
    } else {
      return 'http://localhost:3333/files/' + fileId;
    }
  }

  ngOnInit(): void {
    this.titleService.setTitle(this.title)
    setTimeout(() => {
      this.showSpinner = false;
      this.getAllThread();
    })
  }

  getAllThread(): void {
    this.subs = this.threadHdrService
      .getAllNoLogin()
      .subscribe((result) => {
        this.listThreadHdr = result;        
      });
  }

  readMoreContent(content: string): string {
    const contentAfterEdit: string = content.slice(0, 100) + "...";
    return contentAfterEdit;
  }
}