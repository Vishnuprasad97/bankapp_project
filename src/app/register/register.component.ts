import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  username: any;
  acno: any;
  password: any;

  constructor(private ds: DataService, private router: Router) {}

  register() {
    var username = this.username;
    var acno = this.acno;
    var password = this.password;
    const result = this.ds.register(acno, username, password);
    if (result) {
      alert('Sucessfully Registered');
      this.router.navigateByUrl('');
    } else {
      alert('User already exist');
    }
  }
}
