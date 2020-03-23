import { UserLayoutComponent } from './user-layout/user-layout.component';
import { SvgComponent } from './../components/svg/svg.component';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [
    SvgComponent,
    UserLayoutComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    SvgComponent,
    UserLayoutComponent
  ]
})
export class LayoutModule { }
