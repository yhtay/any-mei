import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../services/auth.service';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  public loginForm!: FormGroup;

  constructor(
    private readonly authService: AuthService,
    private readonly _fb: FormBuilder
  ) {
    this.loginForm = this._fb.group({
      email: [''],
      password: [''],
    });
  }

  onLogin() {
    this.authService.login(this.loginForm.value);
  }
}
