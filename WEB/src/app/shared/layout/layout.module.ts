import { NavComponent } from './../core/nav/nav.component';
import { AdminLayoutComponent } from './admin-layout/admin-layout.component';
import { UserLayoutComponent } from './user-layout/user-layout.component';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [
    UserLayoutComponent,
    AdminLayoutComponent,
    NavComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    UserLayoutComponent,
    AdminLayoutComponent,
    NavComponent
  ]
})
export class LayoutModule { }
