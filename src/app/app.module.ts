import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule }    from '@angular/common/http';

import { AppComponent } from './app.component';
import { CongresspersonDetailComponent } from './congressperson-detail/congressperson-detail.component';
import { CongresspersonListComponent } from './congressperson-list/congressperson-list.component';
import { CongresspersonSearchComponent } from './congressperson-search/congressperson-search.component';

@NgModule({
  declarations: [
    AppComponent,
    CongresspersonDetailComponent,
    CongresspersonListComponent,
    CongresspersonSearchComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
