import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

import { FindAllThreadCategoryRes, InsertThreadHdrReq } from 'src/app/pojo/pojo-import';
import { FileService, LoginService, ThreadCategoryService, ThreadHdrService, UserService } from 'src/app/service/import.service';
import { HomeMemberComponent } from '../home-member.component';

@Component({
  selector: 'home-form-page',
  templateUrl: './form.component.html',
  styleUrls: ['../home-member.component.css'],
})
export class FormComponent implements OnInit, OnDestroy {
  subs?: Subscription;
  
  polling!:boolean
  pollingArray: string[] = [];
  expiredPolling!: Date;

  createThreadHdr: InsertThreadHdrReq = {};
  listThreadCategory: FindAllThreadCategoryRes = {};

  constructor(
    private router: Router,
    private fileService: FileService,
    private loginService: LoginService,
    private threadHdrService: ThreadHdrService,
    private threadCategoryService: ThreadCategoryService,
    private userService: UserService,
    private mainHome: HomeMemberComponent,
  ) {}

  ngOnInit(): void {
    this.createThreadHdr.isActive = true;
    this.createThreadHdr.email = this.loginService.getLoggedEmail()!;

  }

  ngOnDestroy(): void {
    this.subs?.unsubscribe();
  }

  onSubmit(): void {
    if(this.pollingArray.length != 0){
      this.createThreadHdr.options = this.pollingArray;
    }
    
    this.subs = this.threadHdrService
      .insertThreadHdr(this.createThreadHdr)
      .subscribe(() => {
        this.mainHome.getAllThread();
        this.mainHome.getAllThreadByUserLogged();
      });
  }

  getCategory():void{
    this.subs = this.threadCategoryService
      .getAllThreadCategory()
      .subscribe((result) => {
        this.listThreadCategory = result;
      });
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
    if(label == "Polling")
      this.polling = true;
    else this.polling = false;
  }

  addInputControl(optionLabel: string) {
    this.pollingArray.push(optionLabel);
  }

  removeInputControl(index: number) {
     this.pollingArray.splice(index,1);
  }

  changeValue(index: number, event: any) {
    const label = event.target.value;    
    this.pollingArray[index] = label;
  }

}
