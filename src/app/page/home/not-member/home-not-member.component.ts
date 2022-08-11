import { Component, OnInit } from "@angular/core";
import { Title } from "@angular/platform-browser";
import { DefaultPic } from "src/app/constant/default-pic";
import { FileService } from "src/app/service/file.service";
import { ThreadHdrService } from "src/app/service/thread-hdr.service";

@Component({
    selector:'app-home-not-member',
    templateUrl:'./home-not-member.component.html',
    styleUrls:['home-not-member.component.css']
})
export class HomeNotMemberComponent implements OnInit{
    proPic!: string;
    title = 'Home Page';

    constructor(
        private fileService: FileService,
        private threadHdrService: ThreadHdrService,
        private titleService:Title
    ){}
  ngOnInit(): void {
    this.titleService.setTitle(this.title)
  }

    getPhotoThread(fileId: string): string{
        if(fileId == null){
          return DefaultPic.proFile;
        } else{
          return 'http://localhost:3333/files/'+fileId;
        }
      }
}