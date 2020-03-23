import { CheckingTimeComponent } from './checking-time/checking-time.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

const routes: Routes = [
  { path: '', redirectTo: 'checking-time' },
  { path: 'checking-time', component: CheckingTimeComponent }
];

@NgModule({
  declarations: [CheckingTimeComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class AdminModule { }
