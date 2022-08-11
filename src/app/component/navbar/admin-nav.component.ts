import { Component, OnDestroy, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Subscription } from "rxjs";
import { MenuItem} from 'primeng/api';
import { DefaultPic } from "../../constant/default-pic";
import { LoginService, UserService } from "src/app/service/import.service";
import { AdminLayoutComponent } from '../layout/admin-layout.component';

@Component({
  selector: 'admin-nav',
  templateUrl: './admin-nav.component.html',
  styleUrls: ['../../../assets/sass/sakai.scss']
})
export class AdminNavComponent implements OnInit, OnDestroy {

  subscribtion ? : Subscription;
  items: MenuItem[] = [];
  proPic!: string;

  constructor(public appMain: AdminLayoutComponent,
    private loginService: LoginService,
    private userService: UserService,
    private router: Router) {}

  logOut() {
    this.loginService.clearData();
    this.router.navigateByUrl("/login");
  }
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
  ngOnInit(): void {
    this.findPic();
  }

  ngOnDestroy(): void {
    this.subscribtion?.unsubscribe();
  }
}
