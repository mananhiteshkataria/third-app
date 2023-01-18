import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//importing form and reactive module
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http'
import { AppComponent } from './app.component';
import { TdfdemoComponent } from './tdfdemo/tdfdemo.component';
import { MdfdemoComponent } from './mdfdemo/mdfdemo.component';
import { FakeComponent } from './fake/fake.component';

@NgModule({
  declarations: [
    AppComponent,
    TdfdemoComponent,
    MdfdemoComponent,
    FakeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
