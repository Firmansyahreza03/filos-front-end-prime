import { Component } from "@angular/core";
import { Subscription } from "rxjs";

import {ConfirmationService, MessageService} from 'primeng/api';
import { ActivatedRoute, Router } from '@angular/router';
import { FindAllIndustryRes, InsertArticleReq } from "src/app/pojo/pojo-import";
import { ArticleService, IndustryService } from "src/app/service/import.service";

@Component({
  selector: 'app-article-add',
  templateUrl: './article-add.component.html',
  providers: [ConfirmationService, MessageService]
})
export class ArticleAddComponent {
  subscription ? : Subscription;
  mainUrl!: string;
  idParam!: number;

  listIndustry: FindAllIndustryRes = {
    count: undefined,
    data: []
  }
  
  req: InsertArticleReq = {
    isActive: true,
    title: "",
    content: "",
    idIndustry: ""
  }

  constructor(
    private service: ArticleService,
    private industryService: IndustryService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  findAllIndustries(): void {
    this.subscription = this.industryService.getAllIndustry()
      .subscribe((result) => {
        this.listIndustry = result;
      })
  }

  ins() {
    this.subscription = this.service.insert(this.req)
      .subscribe(() => {
        this.router.navigateByUrl(this.mainUrl);
      })
  }

  ngOnInit(): void {
    this.findAllIndustries();
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
