import { Account } from "./Account.js";

export class CurrentAccount extends Account {
  static accountNumber = 0;
  constructor(client, agency) {
    super(0, client, agency);
    CurrentAccount.accountNumber += 1;
  }

  toWithdraw(value) {
    let rate = 1.1;
    return this._toWithdraw(value, rate);
  }
}
