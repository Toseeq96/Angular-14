import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ImagesComponent } from './components/images/images.component';
import { LoginComponent } from './components/login/login.component';
import { ReactiveFormsComponent } from './components/reactive-forms/reactive-forms.component';
import { LoginGuard } from './guards/login.guard';


const routes: Routes = [
                        {path:'', component: LoginComponent},
                        {path:'about', loadChildren: () => import('./modules/about/about.module').then(m => m.AboutModule) },
                        {path:'form', component:ReactiveFormsComponent, canActivate:[LoginGuard]}, 
                        {path:'images', component:ImagesComponent}
                      ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
