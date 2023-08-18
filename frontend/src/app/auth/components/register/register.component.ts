import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
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

  constructor(
    private readonly _fb: FormBuilder,
    private readonly authService: AuthService
  ) {
    this.registrationForm = this._fb.group({
      username: '',
      email: '',
      password: '',
    });
  }

  onRegistration() {
    this.authService.register(this.registrationForm.value).subscribe();
  }
}
