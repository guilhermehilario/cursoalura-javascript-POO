import { Account } from "./Account.js";

export class SavingsAccount extends Account {
  constructor(openingBalance, client, agency) {
    super(openingBalance, client, agency);
  }
  toWithdraw(value) {
    const rate = 1.02;
    return this._toWithdraw(value, rate);
  }
}
