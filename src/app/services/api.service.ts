import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  getReq(){
    return this.http.get('http://www.7timer.info/bin/api.pl?lon=113.17&lat=23.09&product=astro&output=json');
  }
}
