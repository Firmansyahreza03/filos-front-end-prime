import { Component, OnDestroy, OnInit } from "@angular/core";
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
export class RegisterComponent implements OnInit, OnDestroy {
    registerSubscription?: Subscription;
    industriesSubscription?: Subscription;

    items: MenuItem[] = [];
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
        private router: Router,
        private registerService: RegisterService,
        private industryService: IndustryService,
        private fileService: FileService
    ) { }

    findAllIndustries():void{
        this.industriesSubscription = this.industryService.getAllIndustry().subscribe((result) => {
            this.listIndustry = result;
        })
    }

    ngOnInit(): void {
        this.register.isActive = true;
        this.findAllIndustries();
    }

    onVerify(): void {
        this.registerSubscription = this.registerService.generateCode(this.register.userEmail!).subscribe((res) => {
            this.registrationCode = res.code;
            this.step = 1;
        })
    }

    onSubmit(): void {
        if (this.registrationCode == this.register.verificationCode) {
            this.step = 2;
        } else {
            this.step = 1;
        }
    }

    onSubmitProfile(): void {
        if (this.password == this.confirmPassword) {
            this.register.userPassword = this.password
            this.step = 3;
        } else {
            this.step = 2;
        }
    }

    onSubmitProfilePic(): void {
        this.registerSubscription = this.registerService.register(this.register).subscribe((res) => {
            this.router.navigateByUrl("/login");
            this.step = 4;
        });
    }

    ngOnDestroy(): void {
        this.registerSubscription?.unsubscribe();
        this.industriesSubscription?.unsubscribe();
    }
}