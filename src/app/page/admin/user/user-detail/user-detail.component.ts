import { DefaultPic } from './../../../../constant/DefaultPic';
import { Component } from "@angular/core";
import { Subscription } from "rxjs";

import {ConfirmationService, MessageService} from 'primeng/api';
import { ActivatedRoute, Router } from '@angular/router';
import { DataProfile, FindProfileRes } from "../../../../pojo/pojo-import";
import { UserService } from "../../../../service/import.service";

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  providers: [ConfirmationService, MessageService]
})
export class UserDetailComponent {
  subscription ? : Subscription;
  mainUrl!: string;
  idParam!: string;
  proPic!:string;

  res: FindProfileRes = {}

  constructor(
    private mainService: UserService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  getData() {
    this.activatedRoute.params.subscribe(result => {
      const resultTemp: any = result;
      this.idParam = resultTemp.id;
      console.log(this.idParam);
      this.subscription = this.mainService.findById(this.idParam)
        .subscribe(result => {
          this.res=result;
          if(this.res.data && this.res.data.fileId != null){
            this.proPic = 'http://localhost:3333/files/'+this.res.data.fileId;
          }
          else{
            this.proPic = DefaultPic.proFile;
          }
        })
    })
  }

  ngOnInit(): void {
    const thisUrl: string[] = this.router.url.split("/");
    this.mainUrl = thisUrl[1] + "/" + thisUrl[2];
    this.getData();
  }

  back() {
    this.router.navigateByUrl("/" + this.mainUrl);
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }
}
