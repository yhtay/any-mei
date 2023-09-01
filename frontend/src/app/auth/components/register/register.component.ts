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
        username: ['', [Validators.required, Validators.minLength(6)]],
        email: ['', [Validators.required, this.emailValidator]],
        password: ['', [Validators.required], Validators.minLength(6)],
        confirmPassword: ['', [Validators.required], Validators.minLength(6), this.matchPassword],
      }
    );
  }

  emailValidator = (
    control:AbstractControl
    ): ValidationErrors | null => {
    const email = control.value
    const acceptedDomains = ["yahoo.com", "gmail.com", "msn.com"]
    console.log("email: ", email, email.includes("@"), email.endsWith(".com"))
    if (email) {
      // if (email.includes("@") && email.endsWith(".com")) {
      //   return { "invalidEmail": false }
      // }

      // const domainValid = acceptedDomains.some(domain => email.endsWith(domain))
      // if (email.includes("@") && domainValid ) {
      //   return { "invalidEmail": false }
      // }

      if (email.includes("@") && acceptedDomains.includes(email.split("@")[1]) ) {
        return { "invalidEmail": false }
      }

    }
    return { "invalidEmail": true };
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
    // if (password && confirmPassword && password.value !== confirmPassword.value) {
    //   return {
    //     passwordmatcherror: true
    //   }
    // }
    // return null

  };

  onRegistration() {
    // delete this.registrationForm.value.confirmPassword;
    this.hasSubmitted = true;

    /**
     * Check if the form is completed --> if it is --> check for validation --> API POST Call backend
     */

    // I think this is better since we aren't actually changing the form data but only taking what is needed
    const { confirmPassword, ...formData } = this.registrationForm.value;
    console.log("formData: ", formData)
    // this.authService.register(this.registrationForm.value).subscribe(console.log);
  }
}
