import { Component } from "@angular/core";
import { Subscription } from "rxjs";

import {ConfirmationService, MessageService} from 'primeng/api';
import { ActivatedRoute, Router } from '@angular/router';
import { FindAllIndustryRes, UpdateArticleReq } from "../../../../pojo/pojo-import";
import { ArticleService, IndustryService } from "../../../../service/import.service";

@Component({
  selector: 'admin-article-edit',
  templateUrl: './article-edit.component.html',
  providers: [ConfirmationService, MessageService]
})
export class ArticleEditComponent {
  subscription ? : Subscription;
  mainUrl!: string;
  idParam!: string;
  showSpinner!:boolean;

  listIndustry: FindAllIndustryRes = {
    count: undefined,
    data: []
  }

  req: UpdateArticleReq = {
    id: "",
    version: 0,
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

  save() {
    this.showSpinner=true;
    setTimeout(()=>{
      this.showSpinner=false;
      this.subscription = this.service.update(this.req)
      .subscribe(() => {
        this.router.navigateByUrl(this.mainUrl);
      })
    },500)
  }

  initData(): void {
    this.showSpinner=true;
    setTimeout(()=>{
      this.showSpinner=false;
      this.activatedRoute.params.subscribe(result => {
        const resultTemp: any = result;
        this.idParam = resultTemp.id;
        this.subscription = this.service.findById(this.idParam)
          .subscribe(result => {
            this.req.id = result.data?.id;
            this.req.version = result.data?.version;
            this.req.isActive = result.data?.isActive;
  
            this.req.title = result.data?.title;
            this.req.content = result.data?.content;
            this.req.idIndustry = result.data?.idIndustry;
          })
      })
    },500)
    
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
