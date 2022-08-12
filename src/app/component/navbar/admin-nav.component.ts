import { Component, OnDestroy, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Subscription } from "rxjs";
import { MenuItem} from 'primeng/api';
import { AdminLayoutComponent } from '../layout/admin-layout.component';
import { ConfigService, LoginService, UserService } from "../../service/import.service";
import { AppConfig } from "../../api/appconfig";
import { DefaultPic } from "../../constant/default-pic";

@Component({
  selector: 'admin-nav',
  templateUrl: './admin-nav.component.html',
  styleUrls: ['../../../assets/sass/sakai.scss']
})
export class AdminNavComponent implements OnInit, OnDestroy {

  subscription?: Subscription;
  items: MenuItem[] = [];
  config!: AppConfig;

  constructor(public appMain: AdminLayoutComponent,
    private loginService: LoginService,
    private userService: UserService,
    public configService: ConfigService,
    private router: Router) {}

  logOut(): void {
    this.config.proImg = DefaultPic.proFile;
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
