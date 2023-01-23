import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class IsLoggedInService {

  constructor() { }

  CheckLogging():boolean{
    let userName= localStorage.getItem('userName')??sessionStorage.getItem('userName');
    let password=localStorage.getItem('password')??sessionStorage.getItem('password');
    if(userName=='t@g.com' && password=='1234')
    return true;
    else
    return false;
  }
}
