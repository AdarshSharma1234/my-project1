import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  // login variables
  currentUserValue: any;
  userRole: any;

  constructor(private router: Router) {}

  ngOnInit(): void {
    const userValue = localStorage.getItem('currentUser');
    if (userValue != null) {
      this.currentUserValue = JSON.parse(userValue);
    }
    this.userRole = this.currentUserValue.role;
    console.log(this.currentUserValue.role, 'currebt');
  }

  showSideLine1: boolean = false;
  showLine() {
    this.showSideLine1 = true;
  }

  chatbox(url: any) {
    window.open(url, '_blank');
  }
}
