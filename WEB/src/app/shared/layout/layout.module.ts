import { UserLayoutComponent } from './user-layout/user-layout.component';
import { SvgComponent } from './../components/svg/svg.component';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminLayoutComponent } from './admin-layout/admin-layout.component';



@NgModule({
  declarations: [
    SvgComponent,
    UserLayoutComponent,
    AdminLayoutComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    SvgComponent,
    UserLayoutComponent,
    AdminLayoutComponent
  ]
})
export class LayoutModule { }
