import { Component, OnDestroy, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { MenuItem} from 'primeng/api';
import { Subscription } from "rxjs";
import { FindAllIndustryRes, InsertProfileReq, verificationUserReq } from "src/app/pojo/pojo-import";
import { DefaultPic } from "src/app/constant/default-pic";
import { FileService, RegisterService, IndustryService } from "src/app/service/import.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit, OnDestroy {
  registerSubscription ? : Subscription;
  industriesSubscription ? : Subscription;

  items: MenuItem[] = [];
  step: number = 0;
  proPic ? : any = DefaultPic.proFile;

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
    data: []
  }

  constructor(
    private router: Router,
    private registerService: RegisterService,
    private industryService: IndustryService,
    private fileService: FileService
  ) {}

  findAllIndustries(): void {
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
    this.registerSubscription = this.registerService.validateCode(this.verificationData).subscribe((res) => {
      if (res.result == true) {
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

  onChangeFile(event: any): void {
    const file = event.target.files[0];

    if (!file) {
      this.proPic = DefaultPic.proFile;
      this.register.fileName = undefined;
      this.register.fileExt = undefined;
    } else {
      const reader = new FileReader();
      reader.readAsDataURL(file)
      reader.onload = (event) => {
        console.log(event)
        this.proPic = event.target?.result;
      }
      this.upload(file);
    }
  }

  upload(file: any): void {
    this.fileService.uploadAsBase64(file).then((res) => {
      this.register.fileName = res[0];
      this.register.fileExt = res[1];
    });
  }

  ngOnDestroy(): void {
    this.registerSubscription?.unsubscribe();
    this.industriesSubscription?.unsubscribe();
  }
}
