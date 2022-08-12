import { HttpClient, HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from "@angular/common/http";
import { Injectable, OnDestroy } from "@angular/core";
import { Router } from "@angular/router";
import { Observable, Subscription, tap } from "rxjs";
import { MessageService } from 'primeng/api';
import { LoginService } from "../service/login.service";
import { RoleType } from "../constant/role-type";
import { RefreshTokenService } from "../service/refresh-token.service";


@Injectable()
export class CustomInterceptor implements HttpInterceptor, OnDestroy {
  tokenSubs?: Subscription;

  constructor(private http: HttpClient, private loginService: LoginService, private router: Router,
    private messageService: MessageService, private refreshTokenService: RefreshTokenService) {}

  ngOnDestroy(): void {
    this.tokenSubs?.unsubscribe();
  }

  intercept(req: HttpRequest < any > , next: HttpHandler): Observable < HttpEvent < any >> {
    let reqClone = req
    const isLoginReq = req.url.includes('login')

    if (!isLoginReq) {
      reqClone = req.clone({
        setHeaders: {
          Authorization: `Bearer ${this.loginService.getToken()}`,
        }
      })
    }
    return next.handle(reqClone).pipe(
      tap({
        next: (result) => {
          if (result instanceof HttpResponse) {            
            if (result.body) {
              if(result.body.message){
                this.messageService.add({
                  severity: 'success',
                  summary: 'Sukses',
                  detail: result.body.message,
                  life: 1000,
                });
              }
            } 
          }
        },
        error: (result) => {
          if (result instanceof HttpErrorResponse) {
            if (result.status == 401) {
              // if (!isLoginReq) {
              //   this.messageService.add({
              //     severity: 'error',
              //     summary: 'Error',
              //     detail: "You must login first",
              //     life: 1000,
              //   });
              //   this.router.navigateByUrl('/login');
              // }

              // if(result.error.message == "Invalid token"){
              //   this.tokenSubs = this.refreshTokenService.validateRefreshToken(this.loginService.getRefreshToken()!).subscribe((res)=>{
              //     console.log(res);
              //     this.loginService.saveData(res);
              //     reqClone = req.clone({
              //       setHeaders: {
              //         Authorization: `Bearer ${this.loginService.getToken()}`,
              //       }
              //     })
              //     return next.handle(reqClone);
              //   })
              // }
            } 
            else if (result.status == 500 || result.status == 404 || result.status == 400) {
              this.messageService.add({
                severity: 'error',
                summary: 'Error',
                detail: result.error.message,
                life: 1000,
              });
            } 
            else {
              const errors: {
                severity: string;
                summary: string;
                detail: string;
                life: number;
              } [] = [];
              const errorList: string[] = result.error.message;
              const checkArr = Array.isArray(errorList);
              if(checkArr){
                for (let i = 0; i < errorList.length; i++) {
                  errors.push({
                    severity: 'error',
                    summary: 'Error',
                    detail: errorList[i],
                    life: 1000,
                  });
                }
                this.messageService.addAll(errors);
              }
              else {
                this.messageService.add(errorList);
              }
            }
          }
        },
      })
    )
  }
}
