import { NgModule } from "@angular/core";
import { PaymentDetailComponent } from "./payment-detail/payment-detail.component";
import {CardModule} from 'primeng/card';
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import {DropdownModule} from 'primeng/dropdown';
import {InputTextModule} from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';
import {DividerModule} from 'primeng/divider';
import {CalendarModule} from 'primeng/calendar';
import {FileUploadModule} from 'primeng/fileupload';
import {HttpClientModule} from '@angular/common/http';
import { PaymentRouting } from "./payment.routing";
import {RadioButtonModule} from 'primeng/radiobutton';

@NgModule({
    imports:[
        PaymentRouting,
        HttpClientModule,
        FileUploadModule,
        CalendarModule,
        DividerModule,
        ButtonModule,
        InputTextModule,
        DropdownModule,
        CommonModule,
        FormsModule,
        CardModule,
        RadioButtonModule
    ],
    declarations:[
        PaymentDetailComponent
    ],
    exports:[
        PaymentDetailComponent
    ]
})
export class PaymentModule{

}