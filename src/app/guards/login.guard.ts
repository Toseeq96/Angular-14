import { Injectable } from '@angular/core';
import { CanActivate, Router} from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { IsLoggedInService } from 'isLoggedIn'; //for long paths; variable defined in tsconfig.json

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {
  constructor(private isLoggedService:IsLoggedInService, private toast: ToastrService, private route: Router ){}

  canActivate() {
      if(this.isLoggedService.CheckLogging()==false){
        this.route.navigate(['']);  //for redirecting to login; blank page appears otherwise
        this.toast.error('Login Failed');
      }
    return this.isLoggedService.CheckLogging();
  }
  
}
