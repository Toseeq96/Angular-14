import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ImagesComponent } from './components/images/images.component';
import { LoginComponent } from './components/login/login.component';
import { ReactiveFormsComponent } from './components/reactive-forms/reactive-forms.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { LoginGuard } from './guards/login.guard';


const routes: Routes = [
{
  path:'', 
  component: LoginComponent
},
{
  path:'login', 
  component: LoginComponent
},
{
  path:'home',
  canActivate:[LoginGuard],
  component: HomeComponent
},
{
  path:'about', 
  canActivate:[LoginGuard],
  loadChildren: () => import('./modules/about/about.module').then(m => m.AboutModule) 
},                      
{
  path:'form', 
  canActivate:[LoginGuard],
  component:ReactiveFormsComponent  
}, 
{
  path:'signup', 
  component:SignUpComponent  
},                         
{
  path:'images', 
  canActivate:[LoginGuard],
  component:ImagesComponent
},
{
  path:'**',
  canActivate:[LoginGuard],
  component:LoginComponent
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
