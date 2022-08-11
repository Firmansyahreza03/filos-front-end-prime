import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { ButtonModule } from "primeng/button";
import { CardModule } from "primeng/card";
import { DividerModule } from "primeng/divider";
import { ProgressSpinnerModule } from "primeng/progressspinner";
import { TooltipModule } from "primeng/tooltip";
import { HomeNotMemberRouting } from "./home-not-member.routing";
import { HomeNotMemberComponent } from "./not-member/home-not-member.component";

@NgModule({
    imports: [
      HomeNotMemberRouting,
      
      CardModule,
      FormsModule,
      CommonModule,
      ButtonModule,
      DividerModule,
      HttpClientModule,
      ProgressSpinnerModule,
      TooltipModule
    ],
    declarations: [
        HomeNotMemberComponent
    ],
    exports: [
        HomeNotMemberComponent
    ],
  })
export class HomeNotMemberModule{

}