import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {
    console.log(this.objectC[1]);
    localStorage.clear();
  }

  objectC = [
    {
      userId: 1,
      role: 'COUNSELOR',
    },
    {
      userId: 2,
      role: 'MANAGER',
    },
  ];

  numberOnly(event: any): boolean {
    const charCode = event.which ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
    }
    return true;
  }

  logIn(value: any) {
    console.log(value.value);

    if (value == 1) {
      localStorage.setItem('currentUser', JSON.stringify(this.objectC[0]));
      this.router.navigate(['/main/counselor-dashboard']);       
    } else if (value == 2) {
      localStorage.setItem('currentUser', JSON.stringify(this.objectC[1]));
      this.router.navigate(['/main/wellbeing-manager']);
    }
  }
}
