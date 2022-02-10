import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../service/auth.service';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css'],
})
export class UserRegisterComponent implements OnInit {
  hidePassword = true;
  showSpinner = false;
  errorMessage!: string;

  form = new FormGroup({
    userName: new FormControl('', Validators.required),
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    mobile: new FormControl('', [
      Validators.required,
      Validators.minLength(10),
      Validators.maxLength(10),
      Validators.pattern(/^[1-9][0-9]{9}$/),
    ]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required,
      this.authService.passwordValidator,
    ]),
  });

  constructor(private router: Router, private authService: AuthService) {}

  ngOnInit(): void {}

  register() {
    this.showSpinner = true;
    const user = { ...this.form.value };
    this.authService.registerUser(user).subscribe((res) => {
      this.showSpinner = false;
      this.form.reset();
      if (res.status == 201) {
        this.router
          .navigateByUrl('auth', { skipLocationChange: true })
          .then(() => {
            this.router.navigate(['']);
          });
      } else {
        this.errorMessage = res.message;
      }
    });
  }
}
