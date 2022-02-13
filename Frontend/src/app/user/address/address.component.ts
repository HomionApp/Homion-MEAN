import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css'],
})
export class AddressComponent implements OnInit {
  addNewAddress = false;
  isSaved = false;
  constructor() {}

  ngOnInit(): void {}

  editAddress() {
    this.isSaved = false;
    this.addNewAddress = true;
  }

  getChildData(isSaved: boolean) {
    this.isSaved = isSaved;
    this.addNewAddress = false;
  }
}
