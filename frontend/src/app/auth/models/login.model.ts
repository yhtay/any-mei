export type MCLogin = {
  isLoggedIn: boolean;
};

export class MLogin {
  private login: MCLogin = {
    isLoggedIn: false,
  };

  private defaultLogin: MCLogin = {
    isLoggedIn: false,
  };

  getLogin() {
    const status = localStorage.getItem('loginState');
    if (status) {
      const parsedStatus = JSON.parse(status);
      this.login = { isLoggedIn: parsedStatus.isLoggedIn };
      return this.login;
    }
    return this.login;
  }

  setLogin(state: MCLogin) {
    this.login = state;
    console.log(this.login);
    localStorage.setItem('loginState', JSON.stringify(this.login));
  }

  clearLogin() {
    this.login = this.defaultLogin;
    localStorage.clear();
  }
}
