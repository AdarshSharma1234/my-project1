import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-counselor',
  templateUrl: './counselor.component.html',
  styleUrls: ['./counselor.component.scss']
})
export class CounselorComponent implements OnInit {

  constructor() {

  }
  
  ngOnInit(): void {
  }

  isDropDown: boolean = false;

  data = {
    users: [
      {
        name: 'Priya D',
        img: 'assets/img/image 177.svg',
        post: 'Clinical Psychologist',
        status: '3:30 PM - 12:30 PM'
      },
      {
        name: 'Cooper',
        img: 'assets/img/Rectangle 4286 (1).svg',
        post: 'Clinical Psychologist',
        status: 'On Leave'
      },
      {
        name: 'Priya D',
        img: 'assets/img/Rectangle 4286.svg',
        post: 'Clinical Psychologist',
        status: '3:30 PM - 12:30 PM'
      },
      {
        name: 'Kianna',
        img: 'assets/img/Rectangle 4286.svg',
        post: 'Clinical Psychologist',
        status: '3:30 PM - 12:30 PM'
      },
      {
        name: 'Adison',
        img: 'assets/img/Rectangle 4286.svg',
        post: 'Clinical Psychologist',
        status: '3:30 PM - 12:30 PM'
      },
      {
        name: 'Chance',
        img: 'assets/img/Rectangle 4286.svg',
        post: 'Clinical Psychologist',
        status: '3:30 PM - 12:30 PM'
      },
      {
        name: 'Cooper',
        img: 'assets/img/Rectangle 4286.svg',
        post: 'Clinical Psychologist',
        status: 'On Leave'
      },
      {
        name: 'Emery',
        img: 'assets/img/Rectangle 4286.svg',
        post: 'Clinical Psychologist',
        status: '3:30 PM - 12:30 PM'
      },
      {
        name: 'Priya D',
        img: 'assets/img/Rectangle 4286.svg',
        post: 'Clinical Psychologist',
        status: '3:30 PM - 12:30 PM'
      },
      {
        name: 'Priya D',
        img: 'assets/img/Rectangle 4286.svg',
        post: 'Clinical Psychologist',
        status: '3:30 PM - 12:30 PM'
      },
      {
        name: 'Priya D',
        img: 'assets/img/Rectangle 4286.svg',
        post: 'Clinical Psychologist',
        status: '3:30 PM - 12:30 PM'
      },
      {
        name: 'Priya D',
        img: 'assets/img/Rectangle 4286.svg',
        post: 'Clinical Psychologist',
        status: '3:30 PM - 12:30 PM'
      },
      {
        name: 'Priya D',
        img: 'assets/img/Rectangle 4286.svg',
        post: 'Clinical Psychologist',
        status: '3:30 PM - 12:30 PM'
      },
      {
        name: 'Priya D',
        img: 'assets/img/Rectangle 4286.svg',
        post: 'Clinical Psychologist',
        status: '3:30 PM - 12:30 PM'
      },
      {
        name: 'Priya D',
        img: 'assets/img/Rectangle 4286.svg',
        post: 'Clinical Psychologist',
        status: '3:30 PM - 12:30 PM'
      },
    ],
  };

  
  @HostListener('document:click', ['$event:'])
  clickoutside(event: any) {
 

    if (event && event.path && !event.target.className.includes("filterBtn")) {
      let found = false;
      let ar = [...event.path]
      for (let i = 0; i <= ar.length; i++) {
        let p = ar[i];
        found = p && p.className && p.className.includes("dropCheck");
        if (found)
          break;
      }
      if (found) {
        this.isDropDown = true;
      } else {
        this.isDropDown = false;
      }
    }
    
  }
}



