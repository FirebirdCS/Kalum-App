import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Observable } from "rxjs";
import { AuthService } from "../login/auth.service";

@Injectable()
export class TokenInterceptor implements HttpInterceptor{

    constructor(private authService: AuthService){

    }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        let token = this.authService.token;
        if(token != null){
            const authRequest = req.clone({
                headers: req.headers.set('Authorization',`Bearer ${token}`)
            });
            return next.handle(authRequest);
        }
        return next.handle(req);
    }

}
