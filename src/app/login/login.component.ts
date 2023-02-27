import { Component} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  acno:any 
  password:any
  aim='your perfect banking experience'
  data='Enter your account number'
  userDetails:any={
    1000:{acno:1000,username:'amal',password:123,balance:0},
    1001:{acno:1001,username:'anu',password:123,balance:0},
    1002:{acno:1002,username:'anoop',password:123,balance:0},
    1003:{acno:1003,username:'anil',password:123,balance:0}
  }
  constructor(private router:Router){}

  login(){
    var acno=this.acno
    var password=this.password
    var userDetails=this.userDetails
    if(acno in userDetails){
      if(password==userDetails[acno]['password']){
        alert('Login Success')
        this.router.navigateByUrl('dashboard')
      }
      else{
        alert('Incorrect Password')
      }
    }
    else{
      alert('User does not exist')
    }
  }
}
