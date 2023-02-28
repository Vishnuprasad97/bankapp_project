import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
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

  constructor(
    private ds: DataService,
    private router: Router,
    private formbuilder: FormBuilder
  ) {}
  registerform = this.formbuilder.group({
    username: ['', [Validators.required, Validators.pattern('[a-zA-Z]+')]],
    password: ['', [Validators.required, Validators.pattern('[0-9]+')]],
    acno: ['', [Validators.required, Validators.pattern('[0-9]+')]],
  });

  register() {
    var username = this.registerform.value.username;
    var acno = this.registerform.value.acno;
    var password = this.registerform.value.password;
    const result = this.ds.register( acno,username, password);
    if (this.registerform.valid) {
      if (result) {
        alert('Sucessfully Registered');
        this.router.navigateByUrl('');
      } else {
        alert('User already exist');
      }
    } else {
      alert('Invalid Form');
    }
  }
}
