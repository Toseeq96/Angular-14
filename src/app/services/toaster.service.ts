import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class ToastService {

  constructor(private toastr: ToastrService) { }

  showSuccess(message: string){
    this.toastr.success(message, 'Success')
   }
  showError(message: string){
    this.toastr.error(message, 'Error')
   }
  showInfo(message: string){
    this.toastr.info(message, 'Info')
   }
 
}
