import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';
import { ToastService } from 'src/app/services/toaster.service';

declare var $: any; 

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.css']
})

export class ReactiveFormsComponent implements OnInit {
 
  constructor(private fb:FormBuilder, private service: ApiService, private toast: ToastService) { }

  ngOnInit(): void {
   this.service.getReq().subscribe(x=>console.log(x));
   $('#11').select2({
    minimumResultsForSearch: 20 // at least 20 results must be displayed
         });
console.log($('#11'))
  }


  showToasterSuccess(){
    this.toast.showSuccess("Data shown successfully !!");
}
  showToasterError(){
    this.toast.showError("Some Error occured.");
}
  showToasterInfo(){
    this.toast.showInfo("Just info.");
}

submit(){
  this.portalForm;
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

get skillsForm(){
  return this.portalForm.get('skills');
}

//   test(){
// this.skillsForm.push('s');
//   }
}
