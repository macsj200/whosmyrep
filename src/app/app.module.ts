import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CongresspersonDetailComponent } from './congressperson-detail/congressperson-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    CongresspersonDetailComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
