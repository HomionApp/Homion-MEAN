import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  isOpen = false;
  type!: string;

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    const token = localStorage.getItem('token');
    if (token)
      this.authService.verifyToken(token).subscribe((res) => {
        if (res.data) this.type = res.data;
      });

    this.authService.isLoggedIn.subscribe((type) => {
      this.type = type;
    });
  }

  toggleNav() {
    this.isOpen = !this.isOpen;
    if (!this.isOpen) this.closeNav();
  }

  closeNav() {
    document.getElementById('mySidenav')!.style.width = '0';
    document.getElementById('main')!.style.marginLeft = '0';
  }
}
