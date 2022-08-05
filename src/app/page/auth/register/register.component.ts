import { Component, OnDestroy, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { MenuItem} from 'primeng/api';
import { Subscription } from "rxjs";
import { IndustryService } from "src/app/service/industry.service";
import { RegisterService } from "src/app/service/register.service";
import { FindAllIndustryRes} from "src/app/pojo/pojo-import";
import { InsertProfileReq } from "src/app/pojo/profile/insert-profile-req";
import { FileService } from "src/app/service/file.service";
import { verificationUserReq } from "src/app/pojo/user/user-verification-req";


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

    verificationData: verificationUserReq = {
        codeVerification: '',
        email: ''
    };

    listIndustry: FindAllIndustryRes = {
        count: undefined,
        data:[]
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
        this.registerSubscription = this.registerService.generateCode(this.register.userEmail!).subscribe(() => {
            this.step = 1;
        })
    }

    onSubmit(): void {
        this.verificationData.codeVerification = this.register.verificationCode!;
        this.verificationData.email = this.register.userEmail!;
        this.registerSubscription = this.registerService.validateCode(this.verificationData).subscribe((res)=>{
            if(res.result == true){
                this.step = 2;
            }
        })
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