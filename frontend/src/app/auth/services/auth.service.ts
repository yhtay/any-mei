import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, computed, signal } from '@angular/core';
import jwt_decode from 'jwt-decode';
import { BehaviorSubject, tap } from 'rxjs';
import { MAuth } from '../models/auth.model';
import { toSignal } from '@angular/core/rxjs-interop';

export const url: string = 'http://localhost:3000/api';
export const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private mAuth = new MAuth();
  private bevAuth = new BehaviorSubject<MAuth | null>(this.mAuth);
  public $bevAuth = this.bevAuth.asObservable();

  public loginSignal = toSignal(this.bevAuth);

  constructor(private _http: HttpClient) {}

  /**
   * Call a POST Request for login and store data in Model and LocalStorage
   * @param {data} data Data for login: username and password
   * @returns 
   */
  public login(data: any) {
    return this._http.post(`${url}/login`, data).pipe(
      tap((res: any) => {
        console.log('Login');
        this.mAuth.setAuth({ isLoggedIn: true, accessToken: res.token });
      })
    );
  }

  /**
   * Logout the user from home page
   */
  public logout() {
    console.log('Logout');
    this.mAuth.updateAuth({isLoggedIn: false})
  }


  public register(registrationData: any) {
    return this._http.post(`${url}/auth`, registrationData);
  }
}
