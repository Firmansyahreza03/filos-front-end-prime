import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { MenuItem } from 'primeng/api';
import { Subscription } from "rxjs";
import { ConfigService, LoginService, UserService } from "../../service/import.service";
import { AppConfig } from "../../api/appconfig";
import { DefaultPic } from "../../constant/default-pic";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['navbar.component.css']

})
export class NavbarComponent implements OnInit {
  items: MenuItem[] = [];
  topMenuActive: boolean = false
  isLogin?: boolean = this.loginService.isLogin();
  config!: AppConfig;
  subscription?: Subscription;

  constructor(
    public router: Router,
    private loginService: LoginService,
    private userService: UserService,
    public configService: ConfigService,
  ) { }

  
  findPic() {
    const logUser = this.loginService.getLoggedEmail();
    if (logUser != null) {
      this.subscription = this.userService.findByEmail(logUser)
        .subscribe(result => {
          if (result.data?.fileId != null) {
            this.config.proImg = 'http://localhost:3333/files/' + result.data?.fileId;
          } else {
            this.config.proImg = DefaultPic.proFile;
          }
        })
    }
  }

  ngOnInit(): void {
    this.config = this.configService.config;
    this.subscription = this.configService.onConfigUpdate.subscribe(config => this.config = config);
    this.findPic();
    this.initMenu();
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }

  initMenu():void{
    this.items = [{
      icon: 'pi pi-home',
      label: 'Home',
      routerLink: '/home-member'
    },
    {
      label: 'Community',
      routerLink: '/communities'
    },
    {
      label: 'Article',
      routerLink: '/articles'
    },
    {
      label: 'To Admin',
      routerLink: '/admin'
    }];
  }

  logout(): void {
    this.config.proImg = DefaultPic.proFile;
    localStorage.clear();
    this.router.navigateByUrl('/login');
  }

  login(): void{
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
