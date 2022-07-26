import { CanLoad, Route, UrlSegment, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import {Router} from "@angular/router";
import { LoginService } from "../service/login.service";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn : 'root'
})
export class LoginGuard implements CanLoad{

    constructor(private loginService: LoginService, private router: Router) {}
    
    canLoad(route: Route, segments: UrlSegment[]): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
        if(!this.loginService.getToken()){
            this.router.navigateByUrl("/login");
            return false;
        }
        return true;
    }
}