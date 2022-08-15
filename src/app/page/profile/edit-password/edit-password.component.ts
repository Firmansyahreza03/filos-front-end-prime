import { UserService } from '../../../service/import.service';
import { ChangePassReq } from './../../../pojo/pojo-import';
import { Component, OnInit } from "@angular/core";
import { Title } from "@angular/platform-browser";
import { Router } from "@angular/router";
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-edit-password',
  templateUrl: './edit-password.component.html',
  styleUrls: ['../profile.component.css']
})
export class EditPasswordComponent implements OnInit {
  title = 'Edit Password';
  req: ChangePassReq = {
    oldPass: "",
    newPass: ""
  }
  subscribtion ? : Subscription;

  constructor(
    private userService: UserService,
    private router: Router,
    private titleService: Title
  ) {}

  ngOnInit(): void {
    this.titleService.setTitle(this.title)
  }

  updatePass() {
    this.subscribtion = this.userService.updatePass(this.req)
      .subscribe(() => {
        this.router.navigateByUrl("/login")
      })
  }
}
