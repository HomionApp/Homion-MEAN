import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  hidePassword = true;
  errorMessage!: string;

  form = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
    type: new FormControl('USER', Validators.required),
  });

  constructor(private router: Router, private authService: AuthService) {}

  ngOnInit(): void {}

  login() {
    console.log(this.form.controls);
    const loginObj = {
      email: this.form.controls['email'].value,
      password: this.form.controls['password'].value,
      type: this.form.controls['type'].value,
    };
    this.authService.login(loginObj).subscribe((res) => {
      if (res.status != 200) {
        this.errorMessage = res.message;
      } else {
        localStorage.setItem('token', res.data);
        this.authService.isLoggedIn.emit(loginObj.type);
        const type = loginObj.type === 'USER' ? 'user' : 'chef';
        this.router.navigateByUrl(`/${type}/home`);
      }
    });
  }
}
