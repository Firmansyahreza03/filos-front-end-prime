import { Component } from "@angular/core";
import { Subscription } from "rxjs";

import {ConfirmationService, MessageService} from 'primeng/api';
import { ActivatedRoute, Router } from '@angular/router';
import { InsertIndustryReq } from "../../../../pojo/pojo-import";
import { IndustryService } from "../../../../service/import.service";

@Component({
  selector: 'admin-industy-add',
  templateUrl: './industy-add.component.html',
  providers: [ConfirmationService, MessageService]
})
export class IndustyAddComponent {
  subscription ? : Subscription;
  mainUrl!: string;
  idParam!: number;
  showSpinner:boolean=false;
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
    this.showSpinner=true;
    setTimeout(()=>{
        this.showSpinner=false;
        this.subscription = this.industryService.insert(this.req)
      .subscribe(result => {
        this.router.navigateByUrl('/', {
          skipLocationChange: true
        }).then(() => {
          this.router.navigate([this.mainUrl]);
        });
      })
      },500)
    
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
