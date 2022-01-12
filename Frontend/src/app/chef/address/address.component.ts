import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css'],
})
export class AddressComponent implements OnInit {
  addNewAddress = false;
  constructor() {}

  ngOnInit(): void {}

  editAddress() {
    this.addNewAddress = true;
  }

  getChildData(isNewAdded: boolean) {
    this.addNewAddress = false;
  }
}
