import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgqSelect2Module } from './modules/ngq-select2/ngq-select2.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, ReactiveFormsModule, NgqSelect2Module],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
