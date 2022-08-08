import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { MenuItem } from 'primeng/api';
import { Subscription } from "rxjs";
import { DefaultPic } from "src/app/constant/default-pic";
import { LoginService } from "src/app/service/login.service";
import { UserService } from "src/app/service/user.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['navbar.component.css']

})
export class NavbarComponent implements OnInit {
  items: MenuItem[] = [];
  subscribtion?: Subscription;
  proPic!: string;
  topMenuActive: boolean = false
  constructor(
    public router: Router,
    private loginService: LoginService,
    private userService: UserService,
  ) { }

  findPic() {
    const logUser = this.loginService.getLoggedEmail();
    if (logUser != null) {
      this.subscribtion = this.userService.findByEmail(logUser)
        .subscribe(result => {
          if (result.data?.fileId != null) {
            this.proPic = 'http://localhost:3333/files/' + result.data?.fileId;
          } else {
            this.proPic = DefaultPic.proFile;
          }
        })
    }
  }
  ngOnInit() {
    this.items = [{
      label: 'Home',
      routerLink: '/home-member'
      }, 
      {
      label: 'Community',
      routerLink: '/communities'
       },
      {
      label: 'To Admin',
      routerLink: '/admin'
    }];
    this.findPic();
  }
  logout(): void {
    localStorage.clear()
    this.router.navigateByUrl('/login')
  }
  settings(): void {
    this.router.navigateByUrl('/profile')
  }
  showNav(): void {
    if (this.topMenuActive == false) {
      this.topMenuActive = true
    } else {
      this.topMenuActive = false
    }
  }
}
