import {Routes, RouterModule} from "@angular/router";
import { ModuleWithProviders } from '@angular/core';
import {LoginFormComponent} from './login-form.component'
import{JobseekerComponent} from '../jobseeker/jobseeker.component'
import {JobposterComponent} from '../jobposter/jobposter.component'
export const routes: Routes = [
     { path:'', redirectTo: 'login', pathMatch: 'full'},
    { path:'login', component:LoginFormComponent},
    {path:'jobseeker', component:JobseekerComponent},
    {path:'jobposter',component:JobposterComponent}
]
export const routing: ModuleWithProviders = RouterModule.forRoot(routes);