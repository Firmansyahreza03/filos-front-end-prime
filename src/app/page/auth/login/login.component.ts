import { Component, OnDestroy } from "@angular/core";
import { Router } from "@angular/router";
import { Subscription } from "rxjs";
import { LoginReq, LoginRes } from "src/app/pojo/pojo-import";
import { LoginService } from "src/app/service/login.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnDestroy {
  loginSubscription ? : Subscription
  constructor(private loginService: LoginService, private router: Router) {}
  login: LoginReq = {
    email: "",
    password: ""
  }

  loginClick(): void {
    this.loginService.login(this.login)
      .subscribe(result => {
        this.loginService.saveData(result)
        this.router.navigateByUrl('/home-member')
      })
  }

  ngOnDestroy(): void {
    this.loginSubscription?.unsubscribe()
  }
  registerClick():void{
    this.router.navigateByUrl('/register')
  }
}
