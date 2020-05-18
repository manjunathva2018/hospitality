import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {TestModule} from './test/test.module';
import { ChildAComponent } from './child-a/child-a.component';
import {FormsModule} from '@angular/forms';
import { ChildBComponent } from './child-b/child-b.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TempComponent } from './temp/temp.component';
import { HighlightDirective } from './highlight.directive';

@NgModule({
  declarations: [
    AppComponent,
    ChildAComponent,
    ChildBComponent,
    TempComponent,
    HighlightDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TestModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
