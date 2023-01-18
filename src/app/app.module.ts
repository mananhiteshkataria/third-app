import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//importing form and reactive module
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
//importing  form builder module

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
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
