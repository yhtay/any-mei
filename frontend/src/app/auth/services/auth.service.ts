import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import jwt_decode from 'jwt-decode';

export const url: string = 'http://localhost:3000/api';
export const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isLoggedIn: boolean = false;

  constructor(private _http: HttpClient) {}

  public login(data: any) {
    this.isLoggedIn = true;
    console.log(data);
  }

  public logout() {
    this.isLoggedIn = false;
    console.log('Logout');
  }

  public register(data: any) {
    // this.isLoggedIn = true;
    console.log('Register Completed', data);
    return this._http.post(`${url}/auth`, data);
  }
}
