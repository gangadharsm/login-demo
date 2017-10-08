import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {Router} from '@angular/router'
@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
userName:any;
password:any;
roles:any=["JOBSEEKER","JOBPOSTER"];
role:any
  constructor(private _router:Router) { }

  ngOnInit() {
  }
  loginUser(userName,password){
    if(userName=="jobseeker" && password=="123"){
      this._router.navigate(['jobseeker'])
      this.role=this.roles[0];
  }
  else if(userName=="jobposter" && password=="123"){
      this._router.navigate(['jobposter'])
      this.role=this.roles[1]
  }
  else{
    alert("enter the correct username and password");
    this.userName="";
    this.password="";
    this._router.navigate(['login'])
  }
    
  }

}
