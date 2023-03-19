import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  currentuser: any;
  currentacno: any;
  userDetails: any = {
    1000: {
      acno: 1000,
      username: 'amal',
      password: 123,
      balance: 0,
      transaction: [],
    },
    1001: {
      acno: 1001,
      username: 'anu',
      password: 123,
      balance: 0,
      transaction: [],
    },
    1002: {
      acno: 1002,
      username: 'anoop',
      password: 123,
      balance: 0,
      transaction: [],
    },
    1003: {
      acno: 1003,
      username: 'anil',
      password: 123,
      balance: 0,
      transaction: [],
    },
  };

  constructor(private http: HttpClient) {
    // this.getData();
  }
  Savedata() {
    if (this.userDetails) {
      localStorage.setItem('database', JSON.stringify(this.userDetails));
    }
    if (this.currentuser) {
      localStorage.setItem('currentUser', JSON.stringify(this.currentuser));
    }
    if (this.currentacno) {
      localStorage.setItem('currentAcno', JSON.stringify(this.currentacno));
    }
  }
  // getData() {
  //   if (localStorage.getItem('database')) {
  //     this.userDetails = JSON.parse(localStorage.getItem('database') || '');
  //   }
  //   if (localStorage.getItem('currentUser')) {
  //     this.currentuser = JSON.parse(localStorage.getItem('currentUser')||'');
  //   }
  //   if (localStorage.getItem('currentAcno')) {
  //     this.currentacno = JSON.parse(localStorage.getItem('currentAcno') || '');
  //   }
  // }

  register(acno: any, username: any, password: any) {
    const data = {
      acno,
      username,
      password,
    };
    return this.http.post('http://localhost:3000/register', data);
    // var userDetails = this.userDetails;
    // if (acno in userDetails) {
    //   return false;
    // } else {
    //   userDetails[acno] = { acno, username, password, balance: 0, transaction: [] };
    //   this.Savedata()
    //   return true;
    // }
  }
  login(acno: any, password: any) {
    const data = {
      acno,
      password,
    };

    return this.http.post('http://localhost:3000/login', data);

    // var userDetails = this.userDetails;
    // this.currentuser = userDetails[acno]['username'];
    // if (acno in userDetails) {
    //   if (password == userDetails[acno]['password']) {
    //     this.currentacno = acno;
    //     this.Savedata();
    //     return true;
    //   } else {
    //     alert('Incorrect Password');
    //     return false;
    //   }
    // } else {
    //   alert('User Does not Exist');
    //   return false;
    // }
  }

  getToken() {
    const token=JSON.parse(localStorage.getItem('token')||'')
  }
  deposit(acno: any, password: any, amount: any) {
    const data = {
      acno,password,amount
    }
    return this.http.post('http://localhost:3000/deposit', data);
    // let userDetails = this.userDetails;
    // var amnt = parseInt(amount);
    // if (acno in userDetails) {
    //   if (password == userDetails[acno]['password']) {
    //     userDetails[acno]['balance'] += amnt;
    //     userDetails[acno]['transaction'].push({ type: 'CREDIT', amnt });
    //     this.Savedata();
    //     return userDetails[acno]['balance'];
    //   } else {
    //     alert('Incorrect Password');
    //     return false;
    //   }
    // } else {
    //   alert('User Does not exist');
    //   return false;
    // }
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
          userDetails[acno]['transaction'].push({ type: 'DEBIT', amnt });
          this.Savedata();
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
  getTransaction(acno: any) {
    return this.userDetails[acno]['transaction'];
  }
}
