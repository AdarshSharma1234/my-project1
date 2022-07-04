import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counselor-dashboard',
  templateUrl: './counselor-dashboard.component.html',
  styleUrls: ['./counselor-dashboard.component.scss']
})
export class CounselorDashboardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  card_data = {
    user:[
      {
      profile_pic : 'assets/img/uiface.jpg',
      name : 'Craig Bator',
      designation : 'Employee',
      date_icon : 'assets/img/date.png',
      date : '13/05/2022',
      time_icon : 'assets/img/time.png',
      time : '4:00 PM',
      assignment : 'Homework',
      homework_status : 'Overdue',
      documentation : 'Documentation',
      documentation_status: 'Completed',
    },
    {
      profile_pic : 'assets/img/uiface.jpg',
      name : 'Mira Workman',
      designation : 'Employee',
      date_icon : 'assets/img/date.png',
      date : '13/05/2022',
      time_icon : 'assets/img/time.png',
      time : '4:00 PM',
      assignment : 'Homework',
      homework_status : 'Overdue',
      documentation : 'Documentation',
      documentation_status: 'Completed',
    },
    {
      profile_pic : 'assets/img/uiface.jpg',
      name : 'Lydia Lipshutz',
      designation : 'Employee',
      date_icon : 'assets/img/date.png',
      date : '13/05/2022',
      time_icon : 'assets/img/time.png',
      time : '4:00 PM',
      assignment : 'Homework',
      homework_status : 'Overdue',
      documentation : 'Documentation',
      documentation_status: 'Pending',
    },
    {
      profile_pic : 'assets/img/uiface.jpg',
      name : 'Miracle Culhane',
      designation : 'Employee',
      date_icon : 'assets/img/date.png',
      date : '13/05/2022',
      time_icon : 'assets/img/time.png',
      time : '4:00 PM',
      assignment : 'Homework',
      homework_status : 'Not done',
      documentation : 'Documentation',
      documentation_status: 'Not done',
    },
    {
      profile_pic : 'assets/img/uiface.jpg',
      name : 'Kierra Donin',
      designation : 'Employee',
      date_icon : 'assets/img/date.png',
      date : '13/05/2022',
      time_icon : 'assets/img/time.png',
      time : '4:00 PM',
      assignment : 'Homework',
      homework_status : 'Overdue',
      documentation : 'Documentation',
      documentation_status: 'Completed',
    },
    {
      profile_pic : 'assets/img/uiface.jpg',
      name : 'Skylar Lipshutz',
      designation : 'Employee',
      date_icon : 'assets/img/date.png',
      date : '13/05/2022',
      time_icon : 'assets/img/time.png',
      time : '4:00 PM',
      assignment : 'Homework',
      homework_status : 'Overdue',
      documentation : 'Documentation',
      documentation_status: 'Completed',
    },
  ]
  }

  today: boolean = true;
  completed_sessions: boolean = false;
  changeTabs(section: string) {
    if(section==='completed_sessions') {
      this.today = false;
      this.completed_sessions = true;
    } else if(section==='today') {
      this.today = true;
      this.completed_sessions = false;
    }
  }
  

}
