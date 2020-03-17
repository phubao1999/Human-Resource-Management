import { ValidateService } from './validate.service';
import { TimeService } from './time.service';
import { PagerService } from './pager.service';
import { BaseService } from './base.service';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [
    HttpClientModule,
    HttpModule
  ],
  imports: [
    CommonModule
  ],
  providers: [
    BaseService,
    PagerService,
    TimeService,
    ValidateService
  ]
})
export class ServiceModule { }
