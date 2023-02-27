import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  userDetails:any={
    1000:{acno:1000,username:'amal',password:123,balance:0},
    1001:{acno:1001,username:'anu',password:123,balance:0},
    1002:{acno:1002,username:'anoop',password:123,balance:0},
    1003:{acno:1003,username:'anil',password:123,balance:0}
  }

  constructor() { }

  register(acno:any,username:any,password:any){
    var userDetails=this.userDetails
    if(acno in userDetails){
      return false
    }
    else{
      userDetails[acno]={acno,username,password,balance:0}
      return true
    }

  }
  login(acno:any,password:any){
    var userDetails=this.userDetails
    if(acno in userDetails){
      if(password==userDetails[acno]['password']){
       return true
      }
      else{
        alert('Incorrect Password')
        return false
      }
    }
    else{
      alert('User Does not Exist')
      return false
    }
  }
}
