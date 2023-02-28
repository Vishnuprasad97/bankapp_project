import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  currentuser:any
  userDetails: any = {
    1000: { acno: 1000, username: 'amal', password: 123, balance: 0 },
    1001: { acno: 1001, username: 'anu', password: 123, balance: 0 },
    1002: { acno: 1002, username: 'anoop', password: 123, balance: 0 },
    1003: { acno: 1003, username: 'anil', password: 123, balance: 0 },
  };

  constructor() {}

  register(acno: any, username: any, password: any) {
    var userDetails = this.userDetails;
    if (acno in userDetails) {
      return false;
    } else {
      userDetails[acno] = { acno, username, password, balance: 0 };
      return true;
    }
  }
  login(acno: any, password: any) {
    var userDetails = this.userDetails;
    this.currentuser=userDetails[acno]['username']
    if (acno in userDetails) {
      if (password == userDetails[acno]['password']) {
        return true;
      } else {
        alert('Incorrect Password');
        return false;
      }
    } else {
      alert('User Does not Exist');
      return false;
    }
  }
  deposit(acno: any, password: any, amount: any) {
    let userDetails = this.userDetails;
    var amnt = parseInt(amount);
    if (acno in userDetails) {
      if (password == userDetails[acno]['password']) {
        userDetails[acno]['balance'] += amnt;
        return userDetails[acno]['balance'];
      } else {
        alert('Incorrect Password');
        return false;
      }
    } else {
      alert('User Does not exist');
      return false;
    }
  }
  withdraw(acno: any, password: any, amount: any) {
    let userDetails = this.userDetails;
    var amnt = parseInt(amount);
    if (acno in userDetails) {
      if (password == userDetails[acno]['password']) {
        if (amnt > userDetails[acno]['balance']) {
          alert('Insufficient Balance');
          return false;
        } else {
          userDetails[acno]['balance'] -= amnt;
          return userDetails[acno]['balance'];
        }
      } else {
        alert('Password Incorrect');
        return false;
      }
    } else {
      alert('User Does not exist');
      return false;
    }
  }
}
