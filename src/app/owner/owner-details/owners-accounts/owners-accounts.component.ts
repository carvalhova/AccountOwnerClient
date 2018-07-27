import { Component, OnInit, Input } from '@angular/core';
import { Account } from './../../../_interfaces/account.model';

@Component({
  selector: 'app-owners-accounts',
  templateUrl: './owners-accounts.component.html',
  styleUrls: ['./owners-accounts.component.css']
})
export class OwnersAccountsComponent implements OnInit {
  @Input() public accounts: Account[] = [];

  constructor() { }

  ngOnInit() {
  }

}
