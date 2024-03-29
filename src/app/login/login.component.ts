import { getLocaleDateFormat } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  aim = 'your perfect banking experience';
  data = 'Enter your account number';

  constructor(
    private router: Router,
    private ds: DataService,
    private formbuilder: FormBuilder
  ) { }
  LoginForm = this.formbuilder.group({
    acno: ['', [Validators.required, Validators.pattern('[0-9]+')]],
    password: ['', [Validators.required, Validators.pattern('[0-9]+')]],
  });

  login() {
    var acno = this.LoginForm.value.acno;
    var password = this.LoginForm.value.password;
    this.ds.login(acno, password)
      .subscribe((result: any) => {
        localStorage.setItem('currentUser', JSON.stringify(result.currentUser))
        localStorage.setItem('currentAcno', JSON.stringify(result.currentAcno))
        localStorage.setItem('token',JSON.stringify(result.token))
        alert(result.message)
        this.router.navigateByUrl('dashboard')
      },
        result => {
          alert(result.error.message)
        }
      )
  }
}
