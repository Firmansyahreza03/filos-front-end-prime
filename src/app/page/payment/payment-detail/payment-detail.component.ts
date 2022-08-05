import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { InsertPaymentTransactionReq } from "src/app/pojo/pojo-import";
import { FileService } from "src/app/service/file.service";

@Component({
    selector:'app-payment-detail',
    templateUrl:'./payment-detail.component.html',
    styleUrls:['payment-detail.component.css']
})
export class PaymentDetailComponent{
    uploadedFiles: any[] = [];
    step: number = 1;
    
    req:InsertPaymentTransactionReq = {
        isActive : true,
        desc: "",
        price: 0,
    }

    constructor(
        private fileService: FileService,
        private router: Router
    ){}
 
    back():void{
        this.router.navigateByUrl('/communities')
    }
    onUpload(event: any) {
        const file = event.files[0];
        this.fileService.uploadAsBase64(file).then(res => {
          this.req.fileName = res[0];
          this.req.fileExt = res[1];
        })
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