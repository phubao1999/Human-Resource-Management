import { LoginUserComponent } from './login-user/login-user.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [
    LoginUserComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    LoginUserComponent
  ]
})
export class AuthModule { }
