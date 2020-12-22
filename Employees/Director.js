import { Employees } from "./Employees.js";

export class Director extends Employees {
  constructor(name, salary, cpf) {
    super(name, salary, cpf);
    this._bonus = 1.3;
  }
}
