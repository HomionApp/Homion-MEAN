import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-user-nav',
  templateUrl: './user-nav.component.html',
  styleUrls: ['./user-nav.component.css'],
})
export class UserNavComponent implements OnInit {

  constructor() {}

  ngOnInit(): void {
    this.openNav();
  }

  openNav() {
    document.getElementById('mySidenav')!.style.width = '200px';
    document.getElementById("main")!.style.marginLeft = "200px";
  }
}
