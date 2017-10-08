import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {LoginFormComponent} from './login-form.component'
import {routing} from './login.router'


@NgModule({
  imports: [ CommonModule,routing ],
  declarations: [ LoginFormComponent ],
  exports: [ LoginFormComponent ]
})
export class NavbarModule {}