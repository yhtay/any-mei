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
  ValidationErrors,
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
  public hasSubmitted: boolean = false;

  constructor(
    private readonly _fb: FormBuilder,
    private readonly authService: AuthService
  ) {
    this.registrationForm = this._fb.group(
      {
        username: ['', [Validators.required]],
        email: ['', [Validators.required]],
        password: ['', [Validators.required]],
        confirmPassword: ['', [Validators.required]],
      },
      {
        validators: this.matchPassword,
      }
    );
  }

  get f(): { [key: string]: AbstractControl } {
    return this.registrationForm.controls;
  }

  private matchPassword: ValidatorFn = (
    control: AbstractControl
  ): ValidationErrors | null => {
    let password = control.get('password');
    let confirmPassword = control.get('confirmPassword');
    // if (password && confirmPassword && password.value !== confirmPassword.value) {
    //   return {
    //     passwordmatcherror: true
    //   }
    // }
    // return null

    // Since we attain the password & confirmPassword we can just check if the two match
    return password === confirmPassword ? null : { mismatch: true };
  };

  onRegistration() {
    delete this.registrationForm.value.confirmPassword;
    this.hasSubmitted = true;

    // I think this is better since we aren't actually changing the form data but only taking what is needed
    const { confirmPassword, ...formData } = this.registrationForm.value;

    // this.authService.register(this.registrationForm.value).subscribe(console.log);
  }
}
