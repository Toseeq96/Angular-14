import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutRoutingModule } from './about-routing.module';
import { AboutComponent } from './about.component';
import { CheckingComponent } from './checking/checking.component'


@NgModule({
  declarations: [
    AboutComponent,
    CheckingComponent
  ],
  imports: [
    CommonModule,
    AboutRoutingModule
    
  ]
})
export class AboutModule { }
