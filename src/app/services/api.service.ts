import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { observable, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
   data: Observable<any> | undefined;
  constructor(private http:HttpClient) { }

  getReq(){
    if(this.data){
      return this.data;
    }
     
    else{
     this.data= this.http.get('http://www.7timer.info/bin/api.pl?lon=113.17&lat=23.09&product=astro&output=json');
     return this.data;
    }
    
  }
}
