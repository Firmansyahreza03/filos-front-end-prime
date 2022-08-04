import { Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({
    selector:'app-edit-profile',
    templateUrl:'./edit-profile.component.html',
    styleUrls:['edit-profile.component.css']
})
export class EditProfileComponent{
    step: number = 0;
    constructor(
        private router: Router
    ){}

    industry=  [
        {name: 'Bapak Fachru S.pd', code: 'T01'},
                {name: 'Bapak Iqbal Adipradana S.pd', code: 'T02'},
                {name: 'Bapak Handy S.pd', code: 'T03'},
                {name: 'Ibu Dewi S.pd', code: 'T04'},
                {name: 'Ibu Ninuk S.pd', code: 'T05'}
    ] ;
   
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
}