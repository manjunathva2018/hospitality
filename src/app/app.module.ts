import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {TestModule} from './test/test.module';
import { ChildAComponent } from './child-a/child-a.component';
import {FormsModule} from '@angular/forms';
import {ReactiveFormsModule} from '@angular/forms';
import { ChildBComponent } from './child-b/child-b.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TempComponent } from './temp/temp.component';
import { HighlightDirective } from './highlight.directive';
import { LoginComponent } from './login/login.component';
import { Login1Component } from './login1/login1.component';
import { RegisterComponent } from './register/register.component';
import { Register1Component } from './register1/register1.component';
import { UserComponent } from './user/user.component';

@NgModule({
  declarations: [
    AppComponent,
    ChildAComponent,
    ChildBComponent,
    TempComponent,
    HighlightDirective,
    LoginComponent,
    Login1Component,
    RegisterComponent,
    Register1Component,
    UserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TestModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
