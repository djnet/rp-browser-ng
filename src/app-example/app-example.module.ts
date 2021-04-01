import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppExampleComponent } from './app-example.component';
import { RpBrowserComponent } from './rp-browser/rp-browser.component';

@NgModule({
  declarations: [
    AppExampleComponent,
    RpBrowserComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppExampleComponent]
})
export class AppExampleModule { }
