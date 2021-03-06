import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css'],
})
export class AddressComponent implements OnInit {
  address: any[] = [];
  isNewAddress = false;
  isEditMode = false;
  isSaved = false;
  isLoading = false;
  addressId: string = '';
  selectedAddressId!: string;

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.getAddress();
  }

  getAddress() {
    this.isLoading = true;
    this.userService.getAddress().subscribe((res) => {
      if (res.status == 200) {
        this.address = res.data;
        this.userService.selectedAddress.emit(this.address[0]);
        this.selectedAddressId = this.address[0]._id;
        this.isLoading = false;
      }
    });
  }

  changeAddress() {
    let selectedAddress = this.address.filter(
      (address) => address._id === this.selectedAddressId
    )[0];
    this.userService.selectedAddress.emit(selectedAddress);
  }

  addNewAddress() {
    this.isNewAddress = true;
    this.isEditMode = false;
    this.addressId = '';
  }

  editAddress(addressId: string) {
    this.isSaved = false;
    this.isNewAddress = false;
    this.isEditMode = true;
    this.addressId = addressId;
  }

  deleteAddress(addressId: string) {
    this.isLoading = true;
    this.userService.deleteAddress(addressId).subscribe((res) => {
      if (res.status == 202) {
        this.removeFromArray(addressId);
        this.isLoading = false;
      }
    });
  }

  removeFromArray(addressId: string) {
    this.address = this.address.filter((item) => item._id !== addressId);
  }

  getChildData(isSaved: boolean) {
    this.isSaved = isSaved;
    this.isNewAddress = false;
    this.isEditMode = false;
    if (isSaved) {
      this.getAddress();
    }
  }
}
