import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

import { DefaultPic } from 'src/app/constant/DefaultPic';
import { FindProfileRes } from 'src/app/pojo/pojo-import';
import { LoginService, UserService } from 'src/app/service/import.service';

@Component({
  selector: 'home-left-page',
  templateUrl: './left-home.component.html',
  styleUrls: ['../home-member.component.css'],
})
export class LeftPageComponent implements OnInit, OnDestroy {
  profileSubs?: Subscription;
  proPic!: string;

  profileData: FindProfileRes = {};

  constructor(
    private loginService: LoginService,
    private router: Router,
    private userService: UserService,
  ) {}

  ngOnInit(): void {
    this.getProfile();
  }

  ngOnDestroy(): void {
    this.profileSubs?.unsubscribe();
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

  toEditProfile(){
    this.router.navigateByUrl('/profile')
  }

  toWallet(){
    this.router.navigateByUrl('/wallet')
  }
}
