import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RpBrowserComponent } from './rp-browser/rp-browser.component';

@NgModule({
  declarations: [
    AppComponent,
    RpBrowserComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
