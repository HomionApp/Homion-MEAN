import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
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
      this.authService.passwordValidator,
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
    window.history.replaceState({}, '', 'reset-password');
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
}
