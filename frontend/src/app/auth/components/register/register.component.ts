import { Component } from '@angular/core';
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
  ValidationErrors
} from '@angular/forms';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  public registrationForm!: FormGroup;
  public hasSubmitted:boolean = false

  constructor(
    private readonly _fb: FormBuilder,
    private readonly authService: AuthService
  ) {
    this.registrationForm = this._fb.group({
      username: new FormControl(null, [Validators.required]),
      email: new FormControl(null, [Validators.required]),
      password: new FormControl(null, [Validators.required]),
      confirmPassword: new FormControl(null)
    },
    {
      validators: this.matchPassword
    }
    );
  }

  private matchPassword: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
    let password = control.get('password')
    let confirmPassword = control.get('confirmPassword')
    if (password && confirmPassword && password.value !== confirmPassword.value) {
      return {
        passwordmatcherror: true
      }
    }
    return null
  }

  onRegistration() {
    delete this.registrationForm.value.confirmPassword
    this.hasSubmitted = true
    this.authService.register(this.registrationForm.value).subscribe();
  }
}
