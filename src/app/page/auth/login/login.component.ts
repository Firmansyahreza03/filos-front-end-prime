import { Component, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { RoleType } from '../../../constant/role-type';
import { LoginReq } from '../../../pojo/pojo-import';
import { LoginService } from '../../../service/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnDestroy {
  loginSubscription?: Subscription;
  login: LoginReq = {
    email: '',
    password: '',
  };

  constructor(private loginService: LoginService, private router: Router) {}

  loginClick(): void {
    this.loginService.login(this.login).subscribe((result) => {
      this.loginService.saveData(result);
      if(result.data.roleCode == RoleType.ADMIN){
        this.router.navigateByUrl('/admin');
      } else if(result.data.roleCode == RoleType.NONADMIN){
        this.router.navigateByUrl('/home-member');
      }
    });
  }

  ngOnDestroy(): void {
    this.loginSubscription?.unsubscribe();
  }
  registerClick(): void {
    this.router.navigateByUrl('/register');
  }
}