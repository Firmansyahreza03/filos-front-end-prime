import { Component } from "@angular/core";
import { Subscription } from "rxjs";

import {ConfirmationService, MessageService} from 'primeng/api';
import { ActivatedRoute, Router } from '@angular/router';
import { UpdateIndustryReq } from "../../../../pojo/pojo-import";
import { IndustryService } from "../../../../service/import.service";

@Component({
  selector: 'app-industy-edit',
  templateUrl: './industy-edit.component.html',
  providers: [ConfirmationService, MessageService]
})
export class IndustyEditComponent {
  subscription ?: Subscription;
  mainUrl!: string;
  idParam!: string;
  req: UpdateIndustryReq = {
  }

  constructor(
    private industryService: IndustryService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  save() {
    this.subscription = this.industryService.update(this.req)
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

    this.activatedRoute.params.subscribe(result =>{
        const resultTemp : any = result;
        this.idParam = resultTemp.id;
        console.log(this.idParam);
        this.subscription = this.industryService.findById(this.idParam)
        .subscribe(result =>{
          console.log(result);
            this.req.id = result.data?.id;
            this.req.version = result.data?.version;
            this.req.isActive = result.data?.isActive;

            this.req.name = result.data?.name;
        })
    })
  }

  back() {
    this.router.navigateByUrl("/" + this.mainUrl);
  }
  
  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }
}
