import { DataIndustry } from 'src/app/pojo/industry/data-industry';
import { style } from "@angular/animations";
import { Component } from "@angular/core";
import { Subscription } from "rxjs";

import {ConfirmationService, LazyLoadEvent, MessageService} from 'primeng/api';
import { DeleteRes } from "src/app/pojo/delete-res";
import { FindAllIndustryRes } from "src/app/pojo/pojo-import";
import { IndustryService } from "src/app/service/industry.service";
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-industy-add',
  templateUrl: './industy-add.component.html',
  providers: [ConfirmationService, MessageService]
})
export class IndustyAddComponent {
  subscription ? : Subscription;
  mainUrl!: string;
  idParam!:number;
  constructor(
    private router: Router, 
    private activatedRoute: ActivatedRoute
    ) {}

    ngOnInit(): void {
      const thisUrl: string[] = this.router.url.split("/");
      this.mainUrl = thisUrl[1] + "/" + thisUrl[2];
    }
  
  back() {
    this.router.navigateByUrl("/"+this.mainUrl);
  }
}
