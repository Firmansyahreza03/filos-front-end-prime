import { Component, OnDestroy, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Subscription } from "rxjs";
import { DefaultPic } from "src/app/constant/default-pic";
import { DataIndustry, DataProfile, UpdateProfileReq } from "src/app/pojo/pojo-import";
import { FileService } from "src/app/service/file.service";
import { IndustryService } from "src/app/service/industry.service";
import { UserService } from "src/app/service/user.service";

@Component({
    selector:'app-edit-profile',
    templateUrl:'./edit-profile.component.html',
    styleUrls:['edit-profile.component.css']
})
export class EditProfileComponent implements OnInit, OnDestroy{
    step: number = 0;
    profileSubs? : Subscription;
    updateProfileSubs?: Subscription;
    industrySubs?: Subscription;
    profileData: DataProfile = {
        id: '',
        isActive: false,
        version: 0
    };
    industries?: DataIndustry[];
    proPic?: string;
    updateProfile: UpdateProfileReq = {
        id: '',
        version: 0
    };

    constructor(
        private router: Router,
        private profileService: UserService,
        private industryService: IndustryService,
        private fileService: FileService
    ){}

    ngOnInit(): void {
        this.getAllIndustry();
        this.getProfileData();
    }

    ngOnDestroy(): void {
        this.profileSubs?.unsubscribe();
        this.industrySubs?.unsubscribe();
        this.updateProfileSubs?.unsubscribe();
    }

    changeProPic(fileId: string | undefined): void {
        if(!fileId) {
            this.proPic = DefaultPic.proFile;
        } else {
            this.proPic = 'http://localhost:3333/files/'+this.profileData!.fileId;
        }
    } 

    getProfileData() {
        this.profileSubs = this.profileService.findByUserLogged().subscribe((res)=>{
            this.profileData = res.data!;
            this.changeProPic(this.profileData?.fileId);
        })
    }

    getAllIndustry() {
        this.industrySubs = this.industryService.getAllIndustry().subscribe((res) => {
            this.industries = res.data;
        })
    }
       
    editClick():void{
        this.step=1;
    }

    editPassword():void{
        this.router.navigateByUrl('/profile/edit-password')
    }

    editProfile():void{
        this.router.navigateByUrl('/profile')
    }

    logout():void{
        localStorage.clear()
        this.router.navigateByUrl('/login')
    }

    onChangeFile(event: any): void {
        const file = event.target.files[0];
        this.fileService.uploadAsBase64(file).then((res) => {
          this.updateProfile.fileName = res[0];
          this.updateProfile.fileExt = res[1];
        });
      }

    submitUpdate(): void{
        this.updateProfile.companyName = this.profileData.companyName;
        this.updateProfile.fullName = this.profileData.fullName;
        this.updateProfile.id = this.profileData.id;
        this.updateProfile.industryId = this.profileData.industryId;
        this.updateProfile.positionName = this.profileData.positionName;
        this.updateProfile.version = this.profileData.version;
        
        this.updateProfileSubs = this.profileService.update(this.updateProfile).subscribe((res)=>{
            this.getProfileData();
            this.step = 0;
        })
    }

    cancel(): void{
        this.step = 0;
    }
}