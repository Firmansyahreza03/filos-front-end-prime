import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PaymentDetailComponent } from "./payment-detail/payment-detail.component";

const routes:Routes=[
    {
        path:'',
        component: PaymentDetailComponent
    }
]
@NgModule({
    imports:[
        RouterModule.forChild(routes)
    ],
    exports:[
        RouterModule
    ]
})
export class  PaymentRouting{
    
}