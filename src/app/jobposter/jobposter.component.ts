import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-jobposter',
  templateUrl: './jobposter.component.html',
  styleUrls: ['./jobposter.component.css']
})
export class JobposterComponent implements OnInit {
rForm : FormGroup;
display:boolean=true;
FromData:any=[];
  constructor(private fb:FormBuilder) {
    this.rForm = fb.group({
      'jobId':[null,Validators.required],
      'jobTitle' : [null, Validators.required],
      'jobDes':[null,Validators.required],
    })

   }

  ngOnInit() {
  }
   submitForm(value: any) {
     this.FromData=[value]
     this.display=false
   console.log(this.FromData)
  }

}
