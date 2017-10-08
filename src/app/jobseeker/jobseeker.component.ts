import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-jobseeker',
  templateUrl: './jobseeker.component.html',
  styleUrls: ['./jobseeker.component.css']
})
export class JobseekerComponent implements OnInit {
  rForm : FormGroup;
  display:boolean=true;
  FromData:any=[];
  constructor(private fb: FormBuilder) { 
     this.rForm = fb.group({
      'Name':[null,Validators.required],
      'email' : [null, Validators.required],
      'Work':[null,Validators.required],
      'Education':[null,Validators.required]
    })

  }

  ngOnInit() {
  }
 submitForm(value: any) {
     this.FromData=[value]
     this.display=false
  }
}

