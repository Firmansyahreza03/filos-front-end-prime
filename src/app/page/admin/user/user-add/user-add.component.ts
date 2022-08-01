import { DataIndustry } from 'src/app/pojo/industry/data-industry';
import { style } from "@angular/animations";
import { Component } from "@angular/core";
import { Subscription } from "rxjs";

import {ConfirmationService, MessageService} from 'primeng/api';
import { ActivatedRoute, Router } from '@angular/router';
import { DeleteRes, InsertIndustryReq } from "src/app/pojo/pojo-import";
import { IndustryService } from "src/app/service/import.service";

@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  providers: [ConfirmationService, MessageService]
})
export class UserAddComponent {
  subscription ? : Subscription;
  mainUrl!: string;
  idParam!: number;
  req: InsertIndustryReq = {
    isActive: true,
    name: "",
    code: ""
  }
  constructor(
    private industryService: IndustryService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ins() {
    this.subscription = this.industryService.insert(this.req)
    .subscribe(result => {
        this.router.navigateByUrl(this.mainUrl);
      })
  }

  ngOnInit(): void {
    const thisUrl: string[] = this.router.url.split("/");
    this.mainUrl = thisUrl[1] + "/" + thisUrl[2];
  }

  back() {
    this.router.navigateByUrl("/" + this.mainUrl);
  }
  
  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }
}
