import { Component, OnDestroy, OnInit } from "@angular/core";
import { Title } from "@angular/platform-browser";
import { Router } from "@angular/router";
import { Subscription } from "rxjs";
import { AppConfig } from '../../../api/appconfig';
import { DefaultPic } from "../../../constant/default-pic";
import { DataIndustry, DataProfile, UpdateProfileReq } from "../../../pojo/pojo-import";
import { ConfigService, FileService, IndustryService, UserService } from "../../../service/import.service";

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['../profile.component.css']
})
export class EditProfileComponent implements OnInit, OnDestroy {
  title = 'Edit Profile';
  step: number = 0;
  proPic ? : any;
  config!: AppConfig;

  profileSubs ? : Subscription;
  updateProfileSubs ? : Subscription;
  industrySubs ? : Subscription;
  confiqSub ? : Subscription;

  industries: DataIndustry[] = [];
  profileData: DataProfile = {
    id: '',
    isActive: false,
    version: 0
  };
  updateProfile: UpdateProfileReq = {
    id : '',
    fullName : '',
    industryId : '',
    companyName : '',
    positionName : '',
    fileName : '',
    fileExt : '',
    version : 0
  };

  constructor(
    private profileService: UserService,
    private industryService: IndustryService,
    private fileService: FileService,
    public configService: ConfigService,
    private titleService: Title
  ) {}

  ngOnInit(): void {
    this.titleService.setTitle(this.title);

    this.config = this.configService.config;
    this.confiqSub = this.configService.onConfigUpdate.subscribe(config => this.config = config);

    this.getAllIndustry();
    this.getProfileData(true);
  }

  ngOnDestroy(): void {
    this.confiqSub?.unsubscribe();
    this.profileSubs?.unsubscribe();
    this.industrySubs?.unsubscribe();
    this.updateProfileSubs?.unsubscribe();
  }

  findProPic(fileId: string | undefined): void {
    if (!fileId) {
      this.proPic = DefaultPic.proFile;
    } else {
      this.proPic = 'http://localhost:3333/files/' + this.profileData!.fileId;
    }
  }

  getProfileData(init:boolean) {
    this.profileSubs = this.profileService.findByUserLogged()
      .subscribe((result) => {
        this.profileData = result.data!;
        if(init) this.findProPic(this.profileData?.fileId);
      })
  }

  getAllIndustry() {
    this.industrySubs = this.industryService.getAllIndustry()
      .subscribe((result) => {
        this.industries = result.data;
      })
  }

  editClick(): void {
    this.step = 1;
  }

  onChangeFile(event: any): void {
    const file = event.target.files[0];

    if (!file) {
      this.proPic = this.config.proImg;
      this.updateProfile.fileName = undefined;
      this.updateProfile.fileExt = undefined;
    } else {
      const reader = new FileReader();
      reader.readAsDataURL(file)
      reader.onload = (event) => {
        this.proPic = event.target?.result;
      }
      this.upload(file);
    }
  }

  upload(file: any): void {
    this.fileService.uploadAsBase64(file).then((res) => {
      this.updateProfile.fileName = res[0];
      this.updateProfile.fileExt = res[1];
    });
  }

  submitUpdate(): void {
    this.updateProfile.id = this.profileData.id;
    this.updateProfile.fullName = this.profileData.fullName;
    this.updateProfile.industryId = this.profileData.industryId;
    this.updateProfile.companyName = this.profileData.companyName;
    this.updateProfile.positionName = this.profileData.positionName;
    this.updateProfile.version = this.profileData.version;

    this.updateProfileSubs = this.profileService.update(this.updateProfile)
      .subscribe(() => {
        this.getProfileData(false);
        this.step = 0;
        this.config.proImg = 'http://localhost:3333/files/' + this.profileData!.fileId;
      })
  }

  cancel(): void {
    this.updateProfile = {
        id : '',
        fullName : '',
        industryId : '',
        companyName : '',
        positionName : '',
        fileName : '',
        fileExt : '',
        version : 0
    };
    this.proPic = this.config.proImg;
    this.getProfileData(false);
    this.step = 0;
  }
}