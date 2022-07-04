import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assign-homework',
  templateUrl: './assign-homework.component.html',
  styleUrls: ['./assign-homework.component.scss']
})
export class AssignHomeworkComponent implements OnInit {

  worksheet:boolean=false;
  assessment:boolean=false;
  meditation_vid:boolean=false;
  psy_education:boolean=false;
  mini_session:boolean=false;
  add_note:boolean=true;

  // value:any;
  constructor() { }

  ngOnInit(): void {
  }

  changeTabs(value:string)
  {
    if(value === 'worksheet')
    {
      this.worksheet=true;
      this.assessment=false;
      this.meditation_vid=false;
      this.psy_education=false;
      this.mini_session=false;
      this.add_note=false;
      console.log('sfvsdf');
      
    }
    else if(value === 'assessment')
    {
      this.worksheet=false;
      this.assessment=true;
      this.meditation_vid=false;
      this.psy_education=false;
      this.mini_session=false;
      this.add_note=false;
    }
    else if(value === 'meditation_vid')
    {
      this.worksheet=false;
      this.assessment=false;
      this.meditation_vid=true;
      this.psy_education=false;
      this.mini_session=false;
      this.add_note=false;
    }
    else if(value === 'psy_education')
    {
      this.worksheet=false;
      this.assessment=false;
      this.meditation_vid=false;
      this.psy_education=true;
      this.mini_session=false;
      this.add_note=false;
    }
    else if(value === 'mini_session')
    {
      this.worksheet=false;
      this.assessment=false;
      this.meditation_vid=false;
      this.psy_education=false;
      this.mini_session=true;
      this.add_note=false;
    }
    else if(value === 'add_note')
    {
      this.worksheet=false;
      this.assessment=false;
      this.meditation_vid=false;
      this.psy_education=false;
      this.mini_session=false;
      this.add_note=true;
    }
  }

  worksheet_card={
    data:[
    { name: 'Thought Diary', img: '../../../assets/img/vid.svg' },
    { name: 'Challenging negative thoughts', img: '../../../assets/img/vid_1.svg' },
    { name: 'Accepts', img: '../../../assets/img/vid_2.svg' },
    { name: 'Thought Diary', img: '../../../assets/img/vid.svg'},
    { name: 'Challenging negative thoughts', img: '../../../assets/img/vid_1.svg' },
    { name: 'Accepts', img: '../../../assets/img/vid.svg' },
    // { name: 'Accepts' },
    // { name: 'Accepts' },
  ]}


}
