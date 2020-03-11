import { LoginUserService } from './login-user.service';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
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
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [
    LoginUserService
  ]
})
export class LoginUserModule { }
