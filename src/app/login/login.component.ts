import { Component} from '@angular/core';

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
    1003:{acno:1003,username:'anil',password:123,balance:0},
  }
  login(){
    var acno=this.acno
    var password=this.password
    var userDetails=this.userDetails
    if(acno in this.userDetails){
      if(password==userDetails[acno]['password']){
        alert('Login Success')
      }
      else{
        alert('Incorrect Password')
      }
    }
    else{
      alert('User does not exist')
    }
  }
  acnoChange(event:any){
    this.acno=event.target.value
    
    

  }
  pswdChange(event:any){
    this.password=event.target.value

  }

}
