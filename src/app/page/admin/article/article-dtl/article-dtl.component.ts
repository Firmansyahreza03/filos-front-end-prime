import { Component } from "@angular/core";
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from "rxjs";

import { ConfirmationService, MessageService } from 'primeng/api';
import { FindAllIndustryRes, FindArticleRes } from "../../../../pojo/pojo-import";
import { ArticleService, IndustryService } from "../../../../service/import.service";

@Component({
  selector: 'admin-article-detail',
  templateUrl: './article-dtl.component.html',
  providers: [ConfirmationService, MessageService]
})
export class ArticleDtlComponent {
  subscription ? : Subscription;
  mainUrl!: string;
  idParam!: string;

  listIndustry: FindAllIndustryRes = {
    count: undefined,
    data: []
  }

  dataRes !: FindArticleRes;

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

  initData(): void {
    this.activatedRoute.params.subscribe(result => {
      const resultTemp: any = result;
      this.idParam = resultTemp.id;
      console.log(this.idParam);
      this.subscription = this.service.findById(this.idParam)
        .subscribe(result => {
          this.dataRes = result;
        })
    })
  }

  ngOnInit(): void {
    this.findAllIndustries();
    const thisUrl: string[] = this.router.url.split("/");
    this.mainUrl = thisUrl[1] + "/" + thisUrl[2];
    this.initData();
  }

  back() {
    this.router.navigateByUrl("/" + this.mainUrl);
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }
}
