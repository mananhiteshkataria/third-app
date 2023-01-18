import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//importing form module
import { FormsModule } from '@angular/forms';
//importing reactive forms module

import { AppComponent } from './app.component';
import { TdfdemoComponent } from './tdfdemo/tdfdemo.component';
import { MdfdemoComponent } from './mdfdemo/mdfdemo.component';

@NgModule({
  declarations: [
    AppComponent,
    TdfdemoComponent,
    MdfdemoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
