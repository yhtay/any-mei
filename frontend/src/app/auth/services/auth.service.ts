import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, computed, signal } from '@angular/core';
import jwt_decode from 'jwt-decode';
import { BehaviorSubject, tap } from 'rxjs';
import { MAuth } from '../models/auth.model';
import { toSignal } from '@angular/core/rxjs-interop';
import { MCLogin, MLogin } from '../models/login.model';

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

  private mLogin = new MLogin();
  private bevLogin = new BehaviorSubject<MLogin | null>(this.mLogin);
  public $bevLogin = this.bevLogin.asObservable();

  public loginSignal = toSignal(this.bevLogin);

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

        console.log(jwt_decode(res.token));
        console.log(Math.floor(Date.now() / 1000));

        this.mAuth.setAuth({ isLoggedIn: true, accessToken: res.token });
        this.bevAuth.next(this.mAuth);

        this.mLogin.setLogin({ isLoggedIn: true });
        this.bevLogin.next(this.mLogin);
      })
    );
  }

  /**
   * Logout the user from home page
   */
  public logout() {
    console.log('Logout');
    this.mLogin.clearLogin();
  }

  /**
   * POST request to the backend to create new user
   * @param registrationData Data for new register { username: "", email: "", password: ""}
   * @returns
   */
  public register(registrationData: any) {
    return this._http.post(`${url}/auth`, registrationData);
  }
}
