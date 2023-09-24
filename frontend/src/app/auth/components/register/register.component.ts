import { Component, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  ValidatorFn,
  Validators,
  ValidationErrors,
} from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { emailValidator } from 'src/app/core/email.validations';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnDestroy {
  public registrationForm!: FormGroup;
  public hasSubmitted: boolean = false;
  public registerSubscrition!: Subscription

  constructor(
    private readonly _fb: FormBuilder,
    private readonly authService: AuthService,
  ) {

    this.registrationForm = this._fb.group(
      {
        username: ['', [Validators.required, Validators.minLength(6)]],
        email: ['', [Validators.required, emailValidator]],
        password: ['', [Validators.required, Validators.minLength(6)]],
        confirmPassword: ['', [Validators.required, Validators.minLength(6)], this.matchPassword],
      })
  }

  get f(): { [key: string]: AbstractControl } {
    return this.registrationForm.controls;
  }

  private matchPassword = (
    control: AbstractControl
  ): ValidationErrors | null => {
    let password = control.value('password');
    let confirmPassword = control.value('confirmPassword');
    if (password && confirmPassword) {
      if(password.value === confirmPassword.value) {
        return { mismatch: false}
      } else {
        return { mismatch: true}
      }
    }
    return { mismatch: null}
  };

  /**
   * Submit registration form/data to authService
   * POST request only accept { username: "", email: "", password: ""}
   */
  onRegistration() {
    this.hasSubmitted = true;
    const { confirmPassword, ...formData } = this.registrationForm.value;
    this.registerSubscrition = this.authService.register(formData).subscribe();
    console.log("formData: ", formData)
    this.authService.register(formData)
  }

  ngOnDestroy(): void {
    if (this.registerSubscrition) {
      this.registerSubscrition.unsubscribe()
    }
  }
}
