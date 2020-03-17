import { LayoutModule } from './shared/layout/layout.module';
import { Routing } from './app-routing.routing';
import { AdminModule } from './admin/admin.module';
import { UserModule } from './user/user.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PageErrorComponent } from './page-error/page-error/page-error.component';
import { UserComponent } from './user/user.component';
import { AdminComponent } from './admin/admin.component';

@NgModule({
  declarations: [
    AppComponent,
    PageErrorComponent,
    UserComponent,
    AdminComponent
  ],
  imports: [
    Routing,
    BrowserModule,
    UserModule,
    AdminModule,
    LayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
