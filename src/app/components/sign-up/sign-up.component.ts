import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, ValidationErrors, Validators } from '@angular/forms';
import { faUser, faEnvelope, faKey, faLock, faLeaf } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  faUser=faUser;
  faEnvelope=faEnvelope;
  faKey=faKey;
  faLock=faLock;
  passwordPattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}$"; //min length:8, capital, small, number, special character


  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
  }

SignUpForm=this.fb.group({
  name:['',Validators.required],
  email:['',[Validators.required, Validators.email]],
  password:['',[Validators.required,Validators.pattern(this.passwordPattern)]],
  confirm:['',Validators.required],
  agree:['',Validators.required]
});

SubmitSignUp(){
  this.MatchPassword();
  console.log(this.SignUpForm);
}

MatchPassword(){
  if(this.SignUpForm.controls.password.value==this.SignUpForm.controls.confirm.value){
    return true;
  }   
  else{
    return false;
  }   
}

}
