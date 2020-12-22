export class AuthenticatorSystem {
  static login(authentic, password) {
    if (AuthenticatorSystem.isAuthentic(authentic)) {
      return authentic.authenticate(password);
    }
    return false;
  }
  static isAuthentic(authentic) {
    return (
      "authenticate" in authentic && authentic.authenticate instanceof Function
    );
  }
}
