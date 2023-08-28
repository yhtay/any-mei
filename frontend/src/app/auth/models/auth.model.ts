import { computed, signal } from '@angular/core';

export type MCAuth = {
  accessToken: string | null;
  isLoggedIn: boolean;
};

export class MAuth {
  private auth: MCAuth = {
    accessToken: null,
    isLoggedIn: false,
  };

  private defaultAuth: MCAuth = {
    accessToken: null,
    isLoggedIn: false,
  };

  //   Retrieve the latest auth info
  getAuth() {
    return this.auth;
  }

  //   Set the auth info
  setAuth(auth: MCAuth) {
    this.auth = auth;
    localStorage.setItem('authInfo', JSON.stringify(this.auth));
  }

  //   Update the auth info
  updateAuth(data: any) {
    this.auth = { ...this.auth, ...data };
  }

  // Clear the auth info
  clearAuth() {
    this.auth = this.defaultAuth;
    localStorage.clear();
  }
}
