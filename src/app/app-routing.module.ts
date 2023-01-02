import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsComponent } from './components/reactive-forms/reactive-forms.component';


const routes: Routes = [{ path: 'about', loadChildren: () => import('./modules/about/about.module').then(m => m.AboutModule) },
                         {path: 'form', component:ReactiveFormsComponent},
                         {path:'', component: ReactiveFormsComponent}
                          ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
