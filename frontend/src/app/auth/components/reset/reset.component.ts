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
emailValidator


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
  ) {
    this.resetForm = this._fb.group({
      email: ['', [emailValidator]]
    })
  }

  resetPassword() {
    return
  }
}
