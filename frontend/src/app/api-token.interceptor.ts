import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';

@Injectable()
export class ApiTokenInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const token:any = localStorage.getItem("adminToken");
    const finalToken = JSON.parse(token);
    const isApiUrl = request.url.startsWith(environment.apiUrl); 
    if(finalToken && isApiUrl){
      request = request.clone({
        setHeaders:{
          Authorization: `Bearer ${finalToken}`
        }
      })
    }
    return next.handle(request);
  }
}

@Injectable()
export class WebTokenInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const token:any = localStorage.getItem("userToken");
    const finalToken = JSON.parse(token);
    const isApiUrl = request.url.startsWith(environment.apiUrl); 
    if(finalToken && isApiUrl){
      request = request.clone({
        setHeaders:{
          Authorization: `Bearer ${finalToken}`
        }
      })
    }
    return next.handle(request);
  }
}
