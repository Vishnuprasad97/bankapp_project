import { Component } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent {
  user:any
  acno1: any;
  password1: any;
  amount1: any;
  acno2: any;
  password2: any;
  amount2: any;
  constructor(private ds: DataService) {
    this.user=this.ds.currentuser
  }
  deposit() {
    var acno = this.acno1;
    var password = this.password1;
    var amount = this.amount1;

    const result = this.ds.deposit(acno, password, amount);
    if (result) {
      alert(
        `${amount} is credited to your account remaining balance is:${result}`
      );
    } else {
      alert('Deposit Failed');
    }
  }
  withdraw() {
    var acno = this.acno2;
    var password = this.password2;
    var amount = this.amount2;

    const result = this.ds.withdraw(acno, password, amount);
    if (result) {
      alert(
        `${amount} is debited from your account remaining balance is:${result}`
      );
    }
  }
}
