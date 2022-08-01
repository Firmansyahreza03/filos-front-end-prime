import { NgModule } from "@angular/core";
import { LoginComponent } from "./login.component";
import { LoginRouting } from "./login.routing";
import {CardModule} from 'primeng/card';
import {Button, ButtonModule} from 'primeng/button';
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { InputTextModule } from "primeng/inputtext";

@NgModule({
  imports: [
    LoginRouting,
    CardModule,
    ButtonModule,
    CommonModule,
    FormsModule,
    InputTextModule,
  ],
  declarations: [
    LoginComponent
  ],
  exports: [
    LoginComponent
  ]
})
export class LoginModule {

}
