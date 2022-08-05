import { Component, NgModule } from "@angular/core";
import { Router, RouterModule, Routes } from "@angular/router";
import { PaymentListComponent } from "./payment-list/payment-list.component";

const routes : Routes =[
    {
        path : '',
        component : PaymentListComponent
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
export class PaymentRouting{}
