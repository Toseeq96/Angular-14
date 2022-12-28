import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.css']
})
export class ReactiveFormsComponent implements OnInit {

  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
  }
  t:string= 'danger';
  skills:string[]=[];

  //----------------------------------------------------------------------------form using form group
  // portalForm = new FormGroup({
  //   firstName:new FormControl(''), //text inside '' will be default value.
  //   lastName:new FormControl('')
  // })
  
//------------------------------------------------------------------------------form using form builder
portalForm = this.fb.group({
  firstName:['',[Validators.required, Validators.minLength(3)]],
  lastName:[''],
  contacts:this.fb.group({
    contactType:['Email'],
    email:['',Validators.email],
    phoneNum:[]
  }),
  skills:this.fb.array([])
})

 
  DisplayForm(){

    console.log(this.portalForm);
    if(this.portalForm.valid)
    console.log(this.portalForm.value);
  }

  test(){
this.skills.push('s');
  }
}
