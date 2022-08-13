import { Component, OnDestroy, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Subscription } from "rxjs";
import { MenuItem} from 'primeng/api';
import { AdminLayoutComponent } from '../layout/admin-layout.component';
import { ConfigService, LoginService, UserService } from "../../service/import.service";
import { AppConfig } from "../../api/appconfig";
import { DefaultPic } from "../../constant/default-pic";
import { LogoutService } from "src/app/service/logout.service";
import { LogoutReq } from "src/app/pojo/logout/logout-req";

@Component({
  selector: 'admin-nav',
  templateUrl: './admin-nav.component.html',
  styleUrls: ['../../../assets/sass/admin.scss']
})
export class AdminNavComponent implements OnInit, OnDestroy {

  subscription?: Subscription;
  logoutReq: LogoutReq={
    email: this.loginService.getLoggedEmail()!
  }
  items: MenuItem[] = [];
  config!: AppConfig;

  constructor(public appMain: AdminLayoutComponent,
    private loginService: LoginService,
    private userService: UserService,
    public configService: ConfigService,
    private logoutService: LogoutService,
    private router: Router) {}

    logout(): void {
      this.config.proImg = DefaultPic.proFile;
      const clearToken=this.loginService.getRefreshToken()
      this.logoutService.updateUserLogged(this.logoutReq)
      this.logoutService.deleteRefreshToken(clearToken!)
      localStorage.clear();
      this.router.navigateByUrl('/login');
    }
  
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
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }
}
