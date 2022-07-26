import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { MenuItem, MessageService } from 'primeng/api';
import { Subscription } from "rxjs";
import { IndustryService } from "src/app/service/industry.service";
import { RegisterService } from "src/app/service/register.service";
import { FindIndustryRes, FindAllIndustryRes, InsertIndustryRes, UpdateIndustryRes } from "src/app/pojo/pojo-import";
import { DataIndustry } from "src/app/pojo/industry/data-industry";
import { InsertProfileReq } from "src/app/pojo/profile/insert-profile-req";
import { FileService } from "src/app/service/file.service";


@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
    registerSubscription?: Subscription;
    items: MenuItem[] = [];
    regisStep: string = 'step0';
    step: number = 0;
    password!: string
    confirmPassword!: string
    registrationCode!: string
    register: InsertProfileReq = {
        companyName: undefined,
        fileExt: undefined,
        fileName: undefined,
        fullName: undefined,
        industryId: undefined,
        isActive: undefined,
        positionName: undefined,
        userEmail: undefined,
        userPassword: undefined,
        verificationCode: undefined
    };


    listIndustry: FindAllIndustryRes = {
        count: undefined,
        data: undefined
    }

    constructor(
        private registerService: RegisterService,
        private router: Router,
        private industryService: IndustryService,
        private fileService: FileService
    ) { }

    ngOnInit(): void {
        this.register.isActive = true;
        this.industryService.getAllIndustry().subscribe((result) => {
            this.listIndustry = result;
        })
    }
    onVerify(): void {

        this.registerSubscription = this.registerService.generateCode(this.register.userEmail!).subscribe((res) => {
            console.log(res);
            this.registrationCode=res.code;
            this.step = 1;
        })
        console.log(this.register.userEmail);

    }
    onSubmit(): void {
        if (this.registrationCode == this.register.verificationCode) {
            this.step = 2;
        }else{
            this.step=1;
        }
    }
    onSubmitProfile(): void {
        this.step = 3;
        if (this.password == this.confirmPassword) {
            this.register.userPassword = this.password
        } else {
            this.step = 2;
        }
        console.log(this.register);
    }
    onSubmitProfilePic(): void {
        this.step = 4;
        this.registerSubscription = this.registerService.register(this.register).subscribe((res) => {
            console.log(res)
        })
    }

}