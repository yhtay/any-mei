import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  ReactiveFormsModule,
  FormGroup,
  FormsModule,
  AbstractControl,
  FormBuilder
} from '@angular/forms';
import { emailValidator } from 'src/app/core/email.validations';
import { ResetService } from '../../services/reset.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-reset',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './reset.component.html',
  styleUrls: ['./reset.component.scss']
})
export class ResetComponent {
  public resetForm!: FormGroup;
  public resetFormSubmitted: boolean = true;

  constructor (
    private readonly _fb: FormBuilder,
    private readonly resetService: ResetService,
    private $router: Router
  ) {
    this.resetForm = this._fb.group({
      email: ['', [emailValidator]]
    })
  }

  resetPasswordEmail() {
    this.$router.navigate(['/auth/reset-link'])
  }
}
