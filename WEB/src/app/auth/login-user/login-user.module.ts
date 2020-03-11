import { LoginUserComponent } from './login-user.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

const routes: Routes = [
  { path: '', component: LoginUserComponent }
];

@NgModule({
  declarations: [
    LoginUserComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class LoginUserModule { }
