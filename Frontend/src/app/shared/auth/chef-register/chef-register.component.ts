import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Chef } from 'src/app/models/request/chef.model';
import { AuthService } from '../../service/auth.service';

@Component({
  selector: 'app-chef-register',
  templateUrl: './chef-register.component.html',
  styleUrls: ['./chef-register.component.css'],
})
export class ChefRegisterComponent implements OnInit {
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
      this.passwordValidator,
    ]),
    panNumber: new FormControl(
      '',
      Validators.pattern(/^([a-zA-Z]){5}([0-9]){4}([a-zA-Z]){1}?$/)
    ),
  });

  constructor(private authService: AuthService) {}

  ngOnInit(): void {}

  register() {
    const chef = new Chef(
      this.form.controls['userName'].value,
      this.form.controls['firstName'].value,
      this.form.controls['lastName'].value,
      this.form.controls['mobile'].value,
      this.form.controls['email'].value,
      this.form.controls['password'].value,
      this.form.controls['panNumber'].value
    );
    this.authService.registerChef(chef).subscribe((res) => {
      if (res.status != 200) {
        this.errorMessage = res.message;
      }
    });
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
