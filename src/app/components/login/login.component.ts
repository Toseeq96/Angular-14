import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(private fb:FormBuilder, private toast: ToastrService, private route: Router) { }

  faEnvelope=faEnvelope;
  faLock=faLock;

  ngOnInit(): void {
    localStorage.clear();
    sessionStorage.clear();
  }

  loginForm=this.fb.group({
    userName:['', [Validators.required, Validators.email]],
    password:['', Validators.required],
    rememberMe:[false]
  });

  login(){
    if(this.loginForm.invalid){
      this.toast.error("Enter correct email and password");
      return;
    }
    else{
            //different ways to get control properties
         // this.loginForm.controls['userName'].value;
         // this.loginForm.controls.userName.value
      this.loginForm.value.rememberMe==true? localStorage.setItem('userName',this.loginForm.value.userName??'') : sessionStorage.setItem('userName', this.loginForm.value.userName??'');
      this.loginForm.value.rememberMe==true?localStorage.setItem('password',this.loginForm.value.password??'') : sessionStorage.setItem('password', this.loginForm.value.password??'');
      this.route.navigate(['home']);
    }
    
  }
}
