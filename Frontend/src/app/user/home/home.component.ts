import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  lat! : string
  long! : string
  constructor() { }

  ngOnInit(): void {
    if(localStorage.getItem('location'))
     this.lat = JSON.parse(localStorage.getItem('location')!).latitude
     this.long = JSON.parse(localStorage.getItem('location')!).longitude
  }

}
