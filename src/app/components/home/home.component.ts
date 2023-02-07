import { Component, OnInit } from '@angular/core';
import { LocationStrategy } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private location: LocationStrategy, private route: Router) { 
        //prevent going back to login page
        history.pushState(null, '', window.location.href);  
        this.location.onPopState(() => {
        history.pushState(null, '', window.location.href);
      }); 
  }

  ngOnInit(): void {
  }

 

}
