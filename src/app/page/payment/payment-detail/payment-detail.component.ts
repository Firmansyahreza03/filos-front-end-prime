import { Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({
    selector:'app-payment-detail',
    templateUrl:'./payment-detail.component.html',
    styleUrls:['payment-detail.component.css']
})
export class PaymentDetailComponent{
    constructor(
        private router: Router
    ){}
    
    back():void{
        this.router.navigateByUrl('/communities')
    }

}