import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-clients',
  templateUrl: './my-clients.component.html',
  styleUrls: ['./my-clients.component.scss'],
})
export class MyClientsComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  isDropDown: boolean = false;

  data = {
    users: [
      {
        name: 'Priya D',
        img: 'assets/img/image 177.svg',
        post: 'SSI',
        session: '1 Session',
        status: 'Follow Up : 30-05-2022',
      },
      {
        name: 'Cooper',
        img: 'assets/img/Rectangle 4286 (1).svg',
        post: 'HTPF',
        session: '10 Session',
        status: 'Not Booked',
      },
      {
        name: 'Priya D',
        img: 'assets/img/Rectangle 4286.svg',
        post: 'NCII',
        session: '5 Session',
        status: 'Follow Up : 30-05-2022',
      },
      {
        name: 'Kianna',
        img: 'assets/img/Rectangle 4286.svg',
        post: 'CT',
        session: '1 Session',
        status: 'Follow Up : 30-05-2022',
      },
      {
        name: 'Adison',
        img: 'assets/img/Rectangle 4286.svg',
        post: 'CT',
        session: '5 Session',
        status: 'Follow Up : 30-05-2022',
      },
      {
        name: 'Chance',
        img: 'assets/img/Rectangle 4286.svg',
        post: 'NCII',
        session: '1 Session',
        status: 'Follow Up : 30-05-2022',
      },
      {
        name: 'Cooper',
        img: 'assets/img/Rectangle 4286.svg',
        post: 'HPTF',
        session: '5 Session',
        status: 'Not Booked',
      },
      {
        name: 'Emery',
        img: 'assets/img/Rectangle 4286.svg',
        post: 'SSI',
        session: '10 Session',
        status: 'Follow Up : 30-05-2022',
      },
      {
        name: 'Priya D',
        img: 'assets/img/Rectangle 4286.svg',
        post: 'HPTF',
        session: '1 Session',
        status: 'Follow Up : 30-05-2022',
      },
      {
        name: 'Priya D',
        img: 'assets/img/Rectangle 4286.svg',
        post: 'SSI',
        session: '5 Session',
        status: 'Follow Up : 30-05-2022',
      },
      {
        name: 'Priya D',
        img: 'assets/img/Rectangle 4286.svg',
        post: 'SSI',
        session: '8 Session',
        status: 'Follow Up : 30-05-2022',
      },

      {
        name: 'Priya D',
        img: 'assets/img/Rectangle 4286.svg',
        post: 'SSI',
        session: '3 Session',
        status: 'Not Booked',
      },
    ],
  };
  @HostListener('document:click', ['$event:'])
  clickoutside(event: any) {
    if (event && event.path && !event.target.className.includes('filterBtn')) {
      let found = false;
      let ar = [...event.path];
      for (let i = 0; i <= ar.length; i++) {
        let p = ar[i];
        found = p && p.className && p.className.includes('dropCheck');
        if (found) break;
      }
      if (found) {
        this.isDropDown = true;
      } else {
        this.isDropDown = false;
      }
    }
  }
}
