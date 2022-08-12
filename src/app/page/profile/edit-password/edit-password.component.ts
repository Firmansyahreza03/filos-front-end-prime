import { Component, OnInit } from "@angular/core";
import { Title } from "@angular/platform-browser";
import { Router } from "@angular/router";

@Component({
    selector:'app-edit-password',
    templateUrl:'./edit-password.component.html',
    styleUrls:['../profile.component.css']
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
}