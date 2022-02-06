import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Chef } from 'src/app/models/request/chef.model';
import { AuthService } from '../../service/auth.service';

@Component({
  selector: 'app-chef-register',
  templateUrl: './chef-register.component.html',
  styleUrls: ['./chef-register.component.css'],
})
export class ChefRegisterComponent implements OnInit {
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
    panNumber: new FormControl(
      '',
      Validators.pattern(/^([a-zA-Z]){5}([0-9]){4}([a-zA-Z]){1}?$/)
    ),
  });

  constructor(private router: Router, private authService: AuthService) {}

  ngOnInit(): void {}

  register() {
    this.showSpinner = true;
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
