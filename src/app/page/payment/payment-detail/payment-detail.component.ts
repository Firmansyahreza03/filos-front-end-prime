import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
    selector:'app-payment-detail',
    templateUrl:'./payment-detail.component.html',
    styleUrls:['payment-detail.component.css']
})
export class PaymentDetailComponent{
    uploadedFiles: any[] = [];
    step: number = 1;

    constructor(
        private router: Router
    ){}
 
    back():void{
        this.router.navigateByUrl('/communities')
    }
    onUpload(event: { files: any; }) {
        for(let file of event.files) {
            this.uploadedFiles.push(file);
        }
    }
    order():void{
        this.step=2;
    }

    payment():void{
        this.step=3
    }
    confirmation():void{
        this.step=4
        this.router.navigateByUrl('/communities')
    }


}