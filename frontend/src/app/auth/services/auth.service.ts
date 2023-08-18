import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import jwt_decode from 'jwt-decode';

export const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isLoggedIn: boolean = false;
  url: string = 'http://localhost:3000/api';

  constructor(private _http: HttpClient) {}

  public login(data: any) {
    this.isLoggedIn = true;
    console.log(data);
  }

  public logout() {
    this.isLoggedIn = false;
    console.log('Logout');
  }

  public register(registrationData: any) {
    this.isLoggedIn = true;
    console.log("registration data: ", registrationData)
    console.log("url:", `${this.url}/auth`)
    this._http.post(`${this.url}/auth`, registrationData)
  }
}
