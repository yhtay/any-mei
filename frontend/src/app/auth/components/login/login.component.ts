import { Component, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../services/auth.service';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnDestroy {
  public loginForm!: FormGroup;
  public isSubmitted: boolean = false;
  public invalidCredentials: boolean = false;
  public loginResponse!: any;
  private loginSubscription: Subscription | undefined;

  constructor(
    private readonly authService: AuthService,
    private readonly _fb: FormBuilder,
    private readonly _router: Router
  ) {
    this.loginForm = this._fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
  }

  get f(): { [key: string]: AbstractControl } {
    return this.loginForm.controls;
  }

  onLogin() {
    this.isSubmitted = true;
    if (this.loginForm.valid) {
      this.loginSubscription = this.authService
        .login(this.loginForm.value)
        .subscribe(
          (res: any) => {
            this.handleSuccesfulLogin();
          },
          (err) => {
            this.handleFailedLogin(err);
          }
        );
    }
  }

  /**
   * Handle if the login process succeed
   */
  private handleSuccesfulLogin() {
    this.resetFormAndFlags();

    // Update the actual navigation
    this._router.navigate(['dashboard']);
  }

  /**
   * Handle if the login process fail
   * @param {err} err Err from backend
   */
  private handleFailedLogin(err: any) {
    this.invalidCredentials = true;
    this.loginResponse = err.error.message;
  }

  /**
   * Reset the form to default state -- For Cautions
   */
  private resetFormAndFlags() {
    this.loginForm.reset();
    this.isSubmitted = false;
    this.invalidCredentials = false;
    this.loginResponse = null;
  }

  ngOnDestroy(): void {
    if (this.loginSubscription) {
      this.loginSubscription.unsubscribe();
    }
  }
}
