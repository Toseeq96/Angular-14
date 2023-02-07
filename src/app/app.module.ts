import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsComponent } from './components/reactive-forms/reactive-forms.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from './components/login/login.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatBadgeModule} from '@angular/material/badge'
import {MatDatepickerModule} from '@angular/material/datepicker';
import {HttpClientModule} from '@angular/common/http';
import { ImagesComponent } from './components/images/images.component'
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { ToastrModule } from 'ngx-toastr';
import { HomeComponent } from './components/home/home.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    AppComponent,
    ReactiveFormsComponent,
    LoginComponent,
    ImagesComponent,
    HomeComponent,
    SignUpComponent,
    NavBarComponent
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    NgbModule,
    MatSlideToggleModule,
    MatBadgeModule,
    MatDatepickerModule,
    HttpClientModule,
    CommonModule,
    NgOptimizedImage,
    FontAwesomeModule,
    ToastrModule.forRoot({
      timeOut: 5000,
      //positionClass: 'toast-bottom-right',
      closeButton: true,
      tapToDismiss: true, 
      preventDuplicates: true,
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
}
