import { Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({
    selector:'app-edit-password',
    templateUrl:'./edit-password.component.html',
    styleUrls:['edit-password.component.css'],
})
export class EditPasswordComponent{
    password!:string
    confirmPassword!:string

    constructor(
        private router: Router
        ){}
        
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