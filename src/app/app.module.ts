import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//importing form module
import { FormsModule } from '@angular/forms';
//importing reactive forms module

import { AppComponent } from './app.component';
import { TdfdemoComponent } from './tdfdemo/tdfdemo.component';

@NgModule({
  declarations: [
    AppComponent,
    TdfdemoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
