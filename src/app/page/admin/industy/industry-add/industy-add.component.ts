import { Component } from "@angular/core";
import { Subscription } from "rxjs";

import {ConfirmationService, MessageService} from 'primeng/api';
import { ActivatedRoute, Router } from '@angular/router';
import { InsertIndustryReq } from "src/app/pojo/pojo-import";
import { IndustryService } from "src/app/service/import.service";

@Component({
  selector: 'admin-industy-add',
  templateUrl: './industy-add.component.html',
  providers: [ConfirmationService, MessageService]
})
export class IndustyAddComponent {
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
        this.router.navigateByUrl('/', {
          skipLocationChange: true
        }).then(() => {
          this.router.navigate([this.mainUrl]);
        });
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
