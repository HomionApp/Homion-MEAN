import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css'],
})
export class AuthComponent implements OnInit {
  isUser = true;
  isLogin = true;
  isReset = false;
  error = false;
  message!: string;
  showSpinner = false;

  form = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    type: new FormControl('USER', Validators.required),
  });

  constructor(private authService: AuthService) {}

  ngOnInit(): void {}

  forgotPassword() {
    this.error = false;
    this.showSpinner = true;
    const obj = {
      email: this.form.controls['email'].value,
      type: this.form.controls['type'].value,
    };
    this.authService.forgotPassword(obj).subscribe((res) => {
      this.showSpinner = false;
      this.form.reset();
      this.message = res.message;
      if (res.status != 200) this.error = true;
    });
  }
}
