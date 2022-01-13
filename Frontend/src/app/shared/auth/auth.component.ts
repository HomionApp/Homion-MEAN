import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css'],
})
export class AuthComponent implements OnInit {
  isUser = true;
  isLogin = true;
  isReset = false;
  constructor() {}

  ngOnInit(): void {}
}
