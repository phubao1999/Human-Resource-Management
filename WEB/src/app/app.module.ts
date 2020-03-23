import { LayoutModule } from './shared/layout/layout.module';
import { Routing } from './app.routing';
import { PageErrorComponent } from './page-error/page-error.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    PageErrorComponent,
  ],
  imports: [
    BrowserModule,
    Routing,
    LayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
