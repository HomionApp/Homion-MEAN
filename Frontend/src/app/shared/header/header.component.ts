import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  isOpen = false;
  isUser = true;

  constructor() {}

  ngOnInit(): void {}

  toggleNav() {
    this.isOpen = !this.isOpen;
    if (!this.isOpen) this.closeNav();
  }

  closeNav() {
    document.getElementById('mySidenav')!.style.width = '0';
    document.getElementById('main')!.style.marginLeft = '0';
  }
}
