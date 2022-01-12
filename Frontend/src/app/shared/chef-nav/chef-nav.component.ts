import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chef-nav',
  templateUrl: './chef-nav.component.html',
  styleUrls: ['./chef-nav.component.css']
})
export class ChefNavComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.openNav();
  }

  openNav() {
    document.getElementById('mySidenav')!.style.width = '200px';
    document.getElementById("main")!.style.marginLeft = "200px";
  }
}
