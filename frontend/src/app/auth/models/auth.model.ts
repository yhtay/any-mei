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

  //   Retrieve the latest auth info
  getAuth() {
    return this.auth;
  }

  //   Set the auth info
  setAuth(auth: MCAuth) {
    this.auth = auth;
  }

  //   Update the auth info
  updateAuth(data: any) {
    this.auth = {...this.auth, ...data}
  }
}
