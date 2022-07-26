import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { ButtonModule } from "primeng/button";
import { CardModule } from "primeng/card";
import { InputTextModule } from "primeng/inputtext";
import { RegisterComponent } from "./register.component";
import { RegisterRouting } from "./register.routing";
import {StepsModule} from 'primeng/steps';
import {ToastModule} from 'primeng/toast';
import {DropdownModule} from 'primeng/dropdown';
import {PasswordModule} from 'primeng/password';
@NgModule({
    imports: [
   RegisterRouting,
   CardModule,
   ButtonModule,
   CommonModule,
   FormsModule,
   InputTextModule,
   StepsModule,
   ToastModule,
   DropdownModule,
   PasswordModule
    ],
    declarations: [
      RegisterComponent

    ],
    exports: [
    RegisterComponent
    ]
})
export class RegisterModule{

}