import { UserForm } from './../../shared-module/Models/progressNotes.model';
import { Userform } from './../../shared-module/Models/mseForm.model';

import { User } from './../../shared-module/Models/riskassessmentForm.modal';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-progress-notes',
  templateUrl: './progress-notes.component.html',
  styleUrls: ['./progress-notes.component.scss']
})
export class ProgressNotesComponent implements OnInit {
  showInput:boolean = false;
  showData:boolean = false;
  selectDroup:boolean=false;

  datauser:UserForm=new UserForm();

  constructor() { }

  ngOnInit(): void {
  }



// hideData:boolean=false;
//  Detail:boolean=false;
//   selectData(event:any){
//   console.log('hello');

//   if(event=='true'){
//     this.hideData=true;
//   }else{
//     this.hideData=false;
//   }
//   }

  // clickData(event:any){

  //   if(event=='true'){
  //     this.Detail=true;
  //   }else{
  //     this.Detail=false;
  //   }

  // }

  clickData(){
  this.showInput = true;
  }

  hideData(){
    this.showInput = false;
  }

  selectData(){
    this.showData = true;

  }
  hideSelect(){
    this.showData = false;
  }


  onsubmit(ngForm:any){
    console.log(ngForm.value);


  }

  selectDroupdown(){
    this.selectDroup=true
  }



}
