import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../../service/auth.service';

class LoginObj {
  constructor(
    private email: string,
    private password: string,
    private type: string
  ) {}
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(private authService: AuthService) {}

  form = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
    type: new FormControl('USER', Validators.required),
  });

  login() {
    console.log(this.form.controls);
    const loginObj = {
      email: this.form.controls['email'].value,
      password: this.form.controls['password'].value,
      type: this.form.controls['type'].value,
    };
    this.authService.login(loginObj).subscribe((res) => {
      console.log(res)
    });
  }

  ngOnInit(): void {}
}
