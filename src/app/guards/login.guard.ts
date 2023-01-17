import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { IsLoggedInService } from 'isLoggedIn'; //for long paths; variable defined in tsconfig.json

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {
  constructor(private isLoggedService:IsLoggedInService, private toast: ToastrService ){}

  canActivate( route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if(this.isLoggedService.CheckLogging()==false){
        this.toast.error('Try Again');
      }
    return this.isLoggedService.CheckLogging();
  }
  
}
