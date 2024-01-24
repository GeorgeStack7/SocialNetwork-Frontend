import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { AuthService } from '../../services/auth.service';

import Swal from "sweetalert2";

@Component({
  standalone: true,
  imports: [RouterLink, ReactiveFormsModule],
  templateUrl: './login-page.component.html',
  styles: ``
})
export class LoginPageComponent {

  private fb = inject( FormBuilder )
  private authService = inject( AuthService )

  public myForm: FormGroup = this.fb.group({
    email: ['', [ Validators.required, Validators.email]],
    password: ['', [ Validators.required, Validators.minLength(6)]]
  })

  login() {

    const { email, password } = this.myForm.value

    this.authService.login( email, password )
    .subscribe({
      next: () => console.log('Login correcto'),
      error: (message) => Swal.fire('Error', message, 'error')
    });
  }
}
