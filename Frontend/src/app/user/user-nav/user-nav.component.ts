import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-user-nav',
  templateUrl: './user-nav.component.html',
  styleUrls: ['./user-nav.component.css'],
})
export class UserNavComponent implements OnInit {
  @Output() close = new EventEmitter<boolean>();

  constructor() {}

  ngOnInit(): void {
    this.openNav();
  }

  openNav() {
    document.getElementById('mySidenav')!.style.width = '250px';
  }

  closeNav() {
    document.getElementById('mySidenav')!.style.width = '0';
    this.close.emit(false);
  }
}
