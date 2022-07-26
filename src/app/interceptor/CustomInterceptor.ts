import { HttpClient, HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Observable, tap } from "rxjs";
import { ToastrService } from 'ngx-toastr';
import { MessageService } from 'primeng/api';
import { LoginService } from "../service/login.service";


@Injectable()
export class CustomInterceptor implements HttpInterceptor {

  constructor(private http: HttpClient, private loginService: LoginService, private router: Router, private toastr: ToastrService,
    private messageService: MessageService, ) {}

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
            if (result.body.message) {
              this.messageService.add({
                severity: 'success',
                summary: 'Sukses',
                detail: result.body.message,
                life: 1000,
              });
            }
          }
        },
        error: (result) => {
          if (result instanceof HttpErrorResponse) {
            if (result.status == 401) {
              this.messageService.add({
                severity: 'error',
                summary: 'Error',
                detail: result.error.message,
                life: 1000,
              });
              if (!isLoginReq) {
                this.router.navigateByUrl('/login');
              }
              localStorage.clear();
            } 
            else if (result.status == 500 || result.status == 404) {
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
