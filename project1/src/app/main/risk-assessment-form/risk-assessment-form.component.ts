import { Component, OnInit } from '@angular/core';
import { User } from './../../shared-module/Models/riskassessmentForm.modal';

@Component({
  selector: 'app-risk-assessment-form',
  templateUrl: './risk-assessment-form.component.html',
  styleUrls: ['./risk-assessment-form.component.scss']
})
export class RiskAssessmentFormComponent implements OnInit {

  user:User = new User();



  constructor() { }

  ngOnInit(): void {
  }

  onsubmit(ngForm:any){
    // if(this.form.valid){
    //   console.log(form.value)
    // }
    // else{
    //   console.log()
    // }



  }
  // teams={
  //   team: [
  //    {
  //       {id:1,name:'A'},
  //       {id:1,name:'b'},
  //       {id:1,name:'c'},
  //       {id:1,name:'d'},
  //     }

  //   ];
  // }

  }




