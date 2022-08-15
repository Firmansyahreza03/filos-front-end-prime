import { Component, OnDestroy, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
    selector:'menu-profile',
    templateUrl:'./menu-profile.component.html',
    styleUrls:['../profile.component.css']
})
export class MenuProfileComponent{

    constructor(private router: Router){}

    editPassword():void{
        this.router.navigateByUrl('/profile/edit-password')
    }

    editProfile():void{
        this.router.navigateByUrl('/profile')
    }
}