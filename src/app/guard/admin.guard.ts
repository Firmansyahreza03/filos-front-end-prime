import { CanLoad, Route, UrlSegment, UrlTree } from "@angular/router";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Router } from "@angular/router";
import { LoginService } from "../service/login.service";
import { ContantRole } from "../constant/ContantRole";

@Injectable({
    providedIn : 'root'
})
export class AdminGuard implements CanLoad{
    constructor(private loginService: LoginService, private router: Router) {}

    canLoad(route: Route, segments: UrlSegment[]): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
        const role = this.loginService.getLoggedRole();
        if(role == ContantRole.ADMIN) {
            return true;
        }
        else{
            this.router.navigateByUrl("/login");
            return false;
        }
    }
}