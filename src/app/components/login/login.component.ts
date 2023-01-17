import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private fb:FormBuilder, private toast: ToastrService, private route: Router) { }

  ngOnInit(): void {
    localStorage.clear();
  }

  loginForm=this.fb.group({
    userName:['', [Validators.required, Validators.email]],
    password:['', Validators.required]
  });

  login(){
    if(this.loginForm.status == "INVALID"){
      this.toast.error("Enter correct email and password");
      return;
    }
    else{
      console.log(this.loginForm.value);
      localStorage.setItem('userName',this.loginForm.value.userName??'');
      localStorage.setItem('password',this.loginForm.value.password??'');
      this.route.navigate(['form']);
    }
    
  }
}
