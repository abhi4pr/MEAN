import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AdminHomeGuard implements CanActivate {
  constructor( private route:Router ){
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    
      const token = localStorage.getItem("adminToken");
      if (token) {
        const checkToken = JSON.parse(atob(token.split('.')[1]));
        if (checkToken.userId) return true; 
      }
      this.route.navigate(['/login']);
      return false;
      
  }
  
}
