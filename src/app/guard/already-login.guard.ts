import { CanLoad, Route, UrlSegment, UrlTree } from "@angular/router";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Router } from "@angular/router";
import { LoginService } from "../service/login.service";

@Injectable({
    providedIn : 'root'
})
export class AlreadyLoginGuard implements CanLoad{
    constructor(private loginService: LoginService, private router: Router) {}
    
    routerMap(role:string|null){
        if (role != null) {
            this.router.navigateByUrl("/");
        }
        else{
            this.router.navigateByUrl("/login");
        }
    }

    canLoad(route: Route, segments: UrlSegment[]): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
        if(this.loginService.getData()){
            this.routerMap(this.loginService.getLoggedRole());
            return false;
        }
        return true;
    }
}