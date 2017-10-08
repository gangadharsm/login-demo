import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common'
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms'
import { LoginFormComponent } from './login-form/login-form.component';
import { FormsModule } from '@angular/forms';
import {routing} from './login-form/login.router';
import { JobseekerComponent } from './jobseeker/jobseeker.component';
import { JobposterComponent } from './jobposter/jobposter.component'
@NgModule({
  declarations: [
    AppComponent,
    LoginFormComponent,
    JobseekerComponent,
    JobposterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
