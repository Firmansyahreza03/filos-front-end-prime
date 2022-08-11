import { Component, OnInit } from "@angular/core";
import { Title } from "@angular/platform-browser";
import { Router } from "@angular/router";

@Component({
    selector:'app-edit-password',
    templateUrl:'./edit-password.component.html',
    styleUrls:['edit-password.component.css'],
})
export class EditPasswordComponent implements OnInit{
    password!:string
    confirmPassword!:string
    title = 'Edit Password';

    constructor(
        private router: Router,
        private titleService:Title
        ){}
    ngOnInit(): void {
        this.titleService.setTitle(this.title)
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