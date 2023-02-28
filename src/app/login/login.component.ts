import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  acno: any;
  password: any;
  aim = 'your perfect banking experience';
  data = 'Enter your account number';
  constructor(private router: Router, private ds: DataService) {}

  login() {
    var acno = this.acno;
    var password = this.password;
    const result = this.ds.login(acno, password);
    if (result) {
      alert('Login Successful');
      this.router.navigateByUrl('dashboard');
    }
  }
}
