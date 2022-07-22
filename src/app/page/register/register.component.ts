import { Component, OnInit } from "@angular/core";
import {MenuItem, MessageService} from 'primeng/api';
import { Subscription } from "rxjs";

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit{
   
    inputEmail: any;
    inputCodeVerify: any;
    inputFullname:any;
    inputCompanyName: any;
    inputPosition:any;
    inputIndustry:any;
    items : MenuItem[]=[];
    regisStep: string='step0';
    step : number = 0;

    industry=[
        {name: 'Industri 1', code: 'T01'},
        {name: 'Industri 2', code: 'T02'},
        {name: 'Industri 3', code: 'T03'},
        {name: 'Industri 4', code: 'T04'},
        {name: 'Industri 5', code: 'T05'}
    ];
    ngOnInit(): void {
        this.items = [{
            label: 'Input Email',
        },
        {
            label: 'Verify',
        },
        {
            label: 'Biodata',
        },
        {
            label: 'Profile Picture',
        }
    ];

    }
    onVerify(): void {
        this.step = 1;
    }
    onSubmit():void{
        this.step = 2;
    }
    onSubmitProfile():void{
        this.step = 3;
    }
    onSubmitProfilePic():void{
        this.step = 4;
    }
    
}