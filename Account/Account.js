export class Account {
  constructor(openingBalance, client, agency) {
    if (this.constructor == Account) {
      throw new Error(
        "Você não deveria instanciar um objeto de tipo Conta diretamente!"
      );
    }
    this._balance = openingBalance;
    this._client = client;
    this._agency = agency;
  }

  set client(newValue) {
    if (newValue instanceof Client) {
      this._client = newValue;
    }
  }

  get client() {
    return this._client;
  }

  get balance() {
    return this._balance;
  }

  toWithdraw(value) {
    throw new Error("O método Sacar da conta é abstrato");
  }

  _toWithdraw(value, rate) {
    const amountWithdrawn = rate * value;
    if (this._balance >= amountWithdrawn) {
      this._balance -= amountWithdrawn;
      return amountWithdrawn;
    }
    return 0;
  }

  deposit(value) {
    if (value > 0) {
      this._balance += value;
      return value;
    }
  }

  transfer(value, conta) {
    const amountWithdrawn = this.toWithdraw(value);
    conta.deposit(amountWithdrawn);
  }
}
