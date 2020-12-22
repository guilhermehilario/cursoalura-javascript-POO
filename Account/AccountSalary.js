import { Account } from "./Account.js";

export class AccountSalary extends Account {
  constructor(client) {
    super(0, client, 100);
  }

  toWithdraw(value) {
    let rate = 1.01;
    return this._toWithdraw(value, rate);
  }
}
