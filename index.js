import { AuthenticatorSystem } from "./AuthenticatorSystem.js";
import { Client } from "./Client.js";
import { Director } from "./Employees/Director.js";
import { Manager } from "./Employees/Manager.js";

const director = new Director("Rodrigo", 10000, 12345678900);
director.registerPassword("123456789");

const manager = new Manager("Ricardo", 6000, 12345678901);
manager.registerPassword("123");

const client = new Client("Bia", 78945612379, "456");

const directorLogged = AuthenticatorSystem.login(director, "123456789");
const managerLogged = AuthenticatorSystem.login(manager, "123");
console.log(directorLogged, managerLogged);

const clientLogged = AuthenticatorSystem.login(client, "456");
console.log(clientLogged);
