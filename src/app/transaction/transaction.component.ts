import { Component } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css'],
})
export class TransactionComponent {
  useracno: any;
  transaction: any;
  constructor(private ds: DataService) {
    this.useracno = this.ds.currentacno;
    this.transaction = this.ds.getTransaction(this.useracno);
    console.log(this.transaction);
  }
}
