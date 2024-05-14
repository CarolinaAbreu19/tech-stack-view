import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable()
export class CorsInterceptor implements HttpInterceptor {

    constructor() { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const dupReq = request.clone({ 
            headers: request.headers.set('Access-Control-Allow-Origin', '*'), 
            withCredentials: true 
        });
        return next.handle(dupReq);
    }
}