import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  AbstractControl,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../../service/auth.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css'],
})
export class ResetPasswordComponent implements OnInit {
  hidePassword = true;
  token!: string;
  isMatch = true;

  form = new FormGroup({
    password: new FormControl('', [
      Validators.required,
      this.passwordValidator,
    ]),
    confirmPassword: new FormControl('', [Validators.required]),
  });

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.token = this.route.snapshot.params['jwtToken'];
  }

  resetPassword() {
    this.isMatch =
      this.form.controls['password'].value ===
      this.form.controls['confirmPassword'].value;

    if (this.isMatch) {
      this.authService
        .resetPassword({
          password: this.form.controls['password'].value,
          token: this.token,
        })
        .subscribe((res) => {
          if (res.status == 200) {
            this.router.navigateByUrl('');
          }
        });
    }
  }

  passwordValidator(control: AbstractControl): any {
    const password = control.value;
    if (password.length < 8) {
      return { message: 'Your password must contain at least 8 characters.' };
    }
    if (password.search(/[A-Z]/) < 0) {
      return {
        message: 'Your password must contain at least one capital letter.',
      };
    }
    if (password.search(/[0-9]/) < 0) {
      return { message: 'Your password must contain at least one digit.' };
    }
    if (password.search(/[!@#$%^&*]/) < 0) {
      return {
        message: 'Your password must contain at least one special character.',
      };
    }
    return null;
  }
}
