import { Employees } from "./Employees.js";

export class Manager extends Employees {
  constructor(name, salary, cpf) {
    super(name, salary, cpf);
    this._bonus = 1.1;
  }
}
